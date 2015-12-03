contract('organization', function(accounts) {
  console.log(accounts);
  var organizer = accounts[0];
  var member1 = accounts[1];
  var member2 = accounts[2];

  it("Initial organization settings should match", function(done) {

    var o = Organization.at(Organization.deployed_address);
    
    Organization.new({from: organizer}).then(
      function(organization) {
        organization.token_count.call().then(
          function(count) { 
            assert.equal(count, 0, "Count doesn't match!"); 
        }).then(
          function() { 
            return organization.numMembers.call(); 
        }).then(
          function(num) { 
            assert.equal(num, 0, "Members doesn't match!");
            return organization.organizer.call();
        }).then(
          function(organizer) { 
            assert.equal(organizer, organizer, "Organizer doesn't match!");
            done();
        }).catch(done);
    }).catch(done);
  });

  it("Should update token_count, numMembers and balance upon adding member", function(done) {
    var o = Organization.at(Organization.deployed_address);
    
    Organization.new({from: organizer}).then(
      function(organization) {
        organization.token_count.call().then(
          function(count) { 
            assert.equal(count, 0, "Count doesn't match!"); 
        }).then(
          function() { 
            return organization.addMember(member1);
        }).then(
          function() { 
            return organization.token_count.call()
        }).then(
          function(count) { 
            assert.equal(count, 100, "New token_count is not correct!");
            return organization.numMembers.call()
        }).then(
          function(num) { 
            assert.equal(num, 1, "New numMembers is not correct!");
            return organization.members.call(member1)
        }).then(
          function(isMember) { 
            assert.equal(isMember, true, "Member 1 is not registered");
            return organization.balances.call(member1)
        }).then(
          function(balance) { 
            assert.equal(balance, 100, "Balance is wrong");
            done()
        }).catch(done);
    }).catch(done);
  });

  it("Should update token_count, numMembers and balance upon removing member", function(done) {
    var o = Organization.at(Organization.deployed_address);
    
    Organization.new({from: organizer}).then(
      function(organization) {
        organization.token_count.call().then(
          function(count) { 
            assert.equal(count, 0, "Count doesn't match!"); 
        }).then(
          function() { 
            return organization.addMember(member1);
        }).then(
          function() { 
            return organization.removeMember(member1);
        }).then(
          function() { 
            return organization.token_count.call()
        }).then(
          function(count) { 
            assert.equal(count, 0, "New token_count is not correct!");
            return organization.numMembers.call()
        }).then(
          function(num) { 
            assert.equal(num, 0, "New numMembers is not correct!");
            return organization.members.call(member1)
        }).then(
          function(isMember) { 
            assert.equal(isMember, false, "Member 1 is not registered");
            return organization.balances.call(member1)
        }).then(
          function(balance) { 
            assert.equal(balance, 0, "Balance is wrong");
            done()
        }).catch(done);
    }).catch(done);
  });

  it("Should update proposal array when creating proposal", function(done) {
    var o = Organization.at(Organization.deployed_address);
    
    Organization.new({from: organizer, value: 50000000, gas: 50000000}).then(
      function(organization) {
        organization.makeProposal('board election', 14491063620 + 10, 14491063620 +12).then(
          function() { 
            return organization.numProposals.call();
        }).then(
          function(num) { 
            assert.equal(num, 1, "New numProposal wrong")
            return organization.proposals(0)
        }).then(
          function(proposalAddress) { 
            var proposal = Proposal.at(proposalAddress)
            return proposal.name.call()
        }).then(
          function(name) { 
            assert.equal(name, 'board election', "Proposal name is wrong");
            done();
        }).catch(done);
    }).catch(done);
  });

  it("Should forbid vote for non-member", function(done) {
    var o = Organization.at(Organization.deployed_address);
    var p = {}
    
    Organization.new({from: organizer, value: 50000000, gas: 50000000}).then(
      function(organization) {
        organization.makeProposal('board election', 14491063620 + 10, 14491063620 +12).then(
          function() { 
            return organization.proposals(0);
        }).then(
          function(proposalAddress) { 
            p = Proposal.at(proposalAddress)
            return organization.vote(true, 1, proposalAddress, {from: member1})            
        }).then(
          function() { 
            return p.forVotes.call()
        }).then(
          function(numVotes) {  
            assert.equal(numVotes, 0, "Vote shouldn't be allowed");
            done();
        }).catch(done);
    }).catch(done);
  });

  it("Should allow vote for member", function(done) {
    var o = Organization.at(Organization.deployed_address);
    var p = {}
    
    Organization.new({from: organizer, value: 50000000, gas: 50000000}).then(
      function(organization) {
        organization.addMember(member1)
        .then(
          function() {
            return organization.toTime(0)
        }).then(
          function() { 
            return organization.makeProposal('board election', 4, 10);
        }).then(
          function() { 
            return organization.toTime(7)
        }).then(
          function() { 
            return organization.proposals(0)
        }).then(
          function(proposalAddress) { 
            p = Proposal.at(proposalAddress)
            p.toTime(7)
            return organization.proposals(0)           
        }).then(
          function(proposalAddress) { 
            p = Proposal.at(proposalAddress)
            return organization.vote(true, 1, proposalAddress, {from: member1})            
        }).then(
          function() { 
            return p.forVotes.call()
        }).then(
          function(numVotes) {  
            assert.equal(numVotes.toString(10), 1, "Vote should be allowed");
            done();
        }).catch(done);
    }).catch(done);
  });

  it("Should allow weighted vote for member", function(done) {
    var o = Organization.at(Organization.deployed_address);
    var p = {}
    
    Organization.new({from: organizer, value: 50000000, gas: 50000000}).then(
      function(organization) {
        organization.addMember(member1)
        .then(
          function() {
            return organization.toTime(0)
        }).then(
          function() {  
            return organization.makeProposal('board election',  4, 10);
        }).then(
          function() { 
            return organization.toTime(7)
        }).then(
          function() { 
            return organization.proposals(0)
        }).then(
          function(proposalAddress) { 
            p = Proposal.at(proposalAddress)
            p.toTime(7)
            return organization.proposals(0)           
        }).then(
          function(proposalAddress) { 
            console.log(proposalAddress)
            p = Proposal.at(proposalAddress)
            return organization.vote(true, 3, proposalAddress, {from: member1})            
        }).then(
          function() { 
            return organization.balances.call(member1)
        }).then(
          function(balance) { 
            assert.equal(balance, 91, "Wrong balance after vote")
            return p.bal.call()
        }).then(
          function(propbalance) { 
            assert.equal(propbalance.toString(10), 9, "Wrong propbalance after vote")
            return p.forVotes.call()
        }).then(
          function(numVotes) {  
            assert.equal(numVotes, 3, "Vote should be allowed");
            done();
        }).catch(done);
    }).catch(done);
  });


  it("Should allow weighted vote for member", function(done) {
    var o = Organization.at(Organization.deployed_address);
    var p = {}
    
    Organization.new({from: organizer, value: 50000000, gas: 50000000}).then(
      function(organization) {
        organization.addMember(member1).then(
          function() {
            return organization.toTime(0)
        }).then(
          organization.addMember(member2)).then(
          function() { 
            return organization.makeProposal('board election', 4, 10);
        }).then(
          function() { 
            return organization.toTime(7)
        }).then(
          function() { 
            return organization.proposals(0)
        }).then(
          function(proposalAddress) { 
            console.log(proposalAddress)
            p = Proposal.at(proposalAddress)
            p.toTime(7)
            organization.vote(true, 3, proposalAddress, {from: member1}) 
            return proposalAddress         
        }).then(
          function(proposalAddress) {
            return organization.vote(false, 2, proposalAddress, {from: member2})   
        }).then(
          function() { 
            return organization.balances.call(member1)
        }).then(
          function(balance) { 
            assert.equal(balance, 91, "Wrong balance after vote")
            return organization.balances.call(member2)
        }).then(
          function(balance) { 
            assert.equal(balance, 96, "Wrong balance after vote")
            return p.bal.call()
        }).then(
          function(propbalance) { 
            assert.equal(propbalance, 13, "Wrong propbalance after vote")
            return p.forVotes.call()
        }).then(
          function(numVotes) {  
            assert.equal(numVotes, 3, "Vote should be allowed");
            done();
        }).catch(done);
    }).catch(done);
  });

it("Should get result and redistribute tokens", function(done) {
    var o = Organization.at(Organization.deployed_address);
    var p = {}
    var paddress = {}
    
    Organization.new({from: organizer, value: 50000000, gas: 50000000}).then(
      function(organization) {
        organization.addMember(member1).then(
          function() {
            return organization.toTime(0)
        }).then(
          function() {
            return organization.addMember(member2)
        }).then(
          function() { 
            return organization.makeProposal('board election', 4, 10);
        }).then(
          function() { 
            return organization.toTime(7)
        }).then(
          function() { 
            return organization.proposals(0)
        }).then(
          function(proposalAddress) { 
            console.log(proposalAddress)
            paddress = proposalAddress
            p = Proposal.at(proposalAddress)
            p.toTime(7)
            organization.vote(true, 4, proposalAddress, {from: member1})          
            organization.vote(false, 2, proposalAddress, {from: member2})            
        }).then(
          function() {
            return organization.balances.call(member1)
        }).then(
          function(balance) { 
            assert.equal(balance, 84, "Wrong balance after vote for member1")
            return organization.balances.call(member2)
        }).then(
          function(balance) {
            assert.equal(balance, 96, "Wrong balance after vote for member2")
            organization.toTime(13)
            p.toTime(13)
            organization.getResult(paddress)
            return organization.propResults.call(paddress)
        }).then(
          function(result) {  
            assert.equal(result, 1, "Proposal should be adopted");
            return p.bal.call()
        }).then(
          function() { 
            return organization.balances.call(member1)
          }).then(
          function(newbalance1) { 
            assert.equal(newbalance1.toString(10), 94, "Wrong balance after vote for member2")
            return organization.balances.call(member2)
          }).then(
          function(newbalance2) { 
            assert.equal(newbalance2, 106, "Wrong balance after vote for member2")
            done();
        }).catch(done);
    }).catch(done);
  });
});
