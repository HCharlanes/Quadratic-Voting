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
        organization.token_count.call().then(
          function(count) { 
            assert.equal(count, 0, "Count doesn't match!"); 
        }).then(
          function() { 
            return organization.makeProposal('board election');
        }).then(
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
            organization.makeProposal('board election').then(
          function() { 
            return organization.proposals(0)
        }).then(
          function(proposalAddress) { 
            p = Proposal.at(proposalAddress)
            return organization.vote(true, 1, proposalAddress, {from: member1})            
        }).then(
          function() { 
            console.log("4")

            return p.forVotes.call()
        }).then(
          function(numVotes) {  
                                    console.log("5")

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
        organization.addMember(member1).then(
          function() { 
            return organization.makeProposal('board election');
        }).then(
          function() { 
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
            assert.equal(numVotes, 1, "Vote should be allowed");
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
            return organization.makeProposal('board election');
        }).then(
          function() { 
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
            return p.forVotes.call()
        }).then(
          function(numVotes) {  
            assert.equal(numVotes, 3, "Vote should be allowed");
            done();
        }).catch(done);
    }).catch(done);
  });
  // it("Should let you buy a ticket", function(done) {
  //   var c = organization.at(organization.deployed_address);

  // 	organization.new({ from: accounts[0] }).then(
  // 		function(organization) {

  //       var ticketPrice = web3.toWei(.05, 'ether');
  //       var initialBalance = web3.eth.getBalance(organization.address).toNumber();  

  // 			organization.buyTicket({ from: accounts[1], value: ticketPrice }).then(
  //         function() {
  // 					var newBalance = web3.eth.getBalance(organization.address).toNumber();
  //           var difference = newBalance - initialBalance;
  // 					assert.equal(difference, ticketPrice, "Difference should be what was sent");
  // 					return organization.numRegistrants.call(); 
  // 			}).then(
  // 				function(num) { 
  // 					assert.equal(num, 1, "there should be 1 registrant");
  // 					return organization.registrantsPaid.call(sender_account);
  // 			}).then(
  // 				function(amount) {
  // 					assert.equal(amount.toNumber(), ticketPrice, "Sender's paid but is not listed as paying");	
  // 					return web3.eth.getBalance(organization.address);
  // 			}).then(
  // 				function(bal) {
  //           assert.equal(bal.toNumber(), ticketPrice, "Final balance mismatch");
  // 					done();
  // 			}).catch(done);
  // 	}).catch(done);
  // });

  // it("Should issue a refund by owner only", function(done) {
  //   var c = organization.at(organization.deployed_address);
    
  //   organization.new({ from: accounts[0] }).then(
  //     function(organization) {

  //       var ticketPrice = web3.toWei(.05, 'ether');
  //       var initialBalance = web3.eth.getBalance(organization.address).toNumber(); 

  //       organization.buyTicket({ from: accounts[1], value: ticketPrice }).then(
  //         function() {
  //           var newBalance = web3.eth.getBalance(organization.address).toNumber();
  //           var difference = newBalance - initialBalance;
  //           assert.equal(difference, ticketPrice, "Difference should be what was sent");

  //           // Now try to issue refund as second user - should fail
  //           return organization.refundTicket(accounts[1], ticketPrice, {from: accounts[1]});
  //       }).then(
  //         function() {  
  //           var balance = web3.eth.getBalance(organization.address);
  //           assert.equal(balance, ticketPrice, "Balance should be unchanged");
  //           // Now try to issue refund as organizer/owner
  //           return organization.refundTicket(accounts[1], ticketPrice, {from: accounts[0]});
  //       }).then(
  //         function() {
  //           var postRefundBalance = web3.eth.getBalance(organization.address).toNumber();
  //           assert.equal(postRefundBalance, initialBalance, "Balance should be initial balance");
  //           done();
  //       }).catch(done);
  //     }).catch(done);
  //   });

});

