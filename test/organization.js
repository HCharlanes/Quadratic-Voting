  contract('OrganizationsFactory', function(accounts) {
    console.log(accounts);
    var creator = accounts[0];
    var member1 = accounts[1];
    var member2 = accounts[2];
  
    it("Should let anyone create a Factory, as the factoryManager. And anyone create an organization", function(done) {
    	var org = {}
    	var organizationAddr;
    //  var o = Organizations.at(Organizations.deployed_address);
      
      OrganizationsFactory.new({from: creator}).then(
        function (contract) {
        contract.factoryManager.call()
        .then(
        	function(createdBy) { 
            	assert.equal(createdBy, creator, "Owner address is wrong!"); 
        }).then(
        	function(name) { 
            	contract.NewOrganization("ONU", 100, 1000, {from: member1});
            	return contract.organizationID.call()
        }).then(
	    	function(ID) { 
	        	assert.equal(ID, 1, "organizationID has not incremented");
	        	return contract.numOrganizations.call()
	    }).then(
	    	function(NbOrg) { 
	        	assert.equal(NbOrg, 1, "Adress of the organization not in organizations");
	        	return contract.organizations.call(0);
	    }).then(
	    	function(addr) { 
	    		console.log(addr);
	    		organizationAddr = addr;
	    		org = Organization.at(addr);
	        	return org.organizationOwner.call();
	    }).then(
	    	function(organizationowner) { 
	        	assert.equal(organizationowner, member1, "member1 is not the organizationowner");
	        	contract.DeleteOrganization(organizationAddr);
	        	return contract.numOrganizations.call() 
	    }).then(
	    	function(numorg) { 
	        	assert.equal(numorg, 1, "Num org should be 1, deletion should not have been completed");
	          	contract.DeleteOrganization(organizationAddr, {from: member1});
	        	return contract.numOrganizations.call() 
	    }).then(
	    	function(numorg) { 
	        	assert.equal(numorg, 0, "Numorg should be 0, deletion should have been completed")
            	done();
        }).catch(done);
      }).catch(done);
    });
});

contract('Organization', function(accounts) {
    console.log(accounts);
    var creator = accounts[0];
    var member1 = accounts[1];
    var member2 = accounts[2];
    var organizationAddr;
    var proposalAddress;
    var org = {};
    var p = {};

    /*it("The creator of the organization should be able to add and remove member", function(done) {
      
      OrganizationsFactory.new({from: creator}).then(
        function (contract) {
        	contract.NewOrganization("ONU", 100, 1000, {from: member1})
        .then(
        	function() { 
            	return contract.organizations.call(0);
        }).then(
        	function(addr) { 
            	console.log(addr);
	    		organizationAddr = addr;
	    		org = Organization.at(addr);
	        	return org.organizationOwner.call();
        }).then(
	    	function(organizationowner) { 
	        	assert.equal(organizationowner, member1, "member1 is not the organizationowner");
	        	org.addMember(member2);
	        	return org.members.call(member2);
	    }).then(
            function(member2registered) { 
	        	assert.equal(member2registered, false, "member2 is registered, it should not be");
                org.addMember(member2, {from: member1});
                return org.members.call(member2);
	    }).then(
            function(member2registered) { 
	        	assert.equal(member2registered, true, "member2 is not registered, it should be");
	        	org.removeMember(member2, {from: member1});
                return org.members.call(member2);
        }).then(
            function(member2registered) { 
	        	assert.equal(member2registered, false, "member2 is  registered, it should have been removed");
              done()
        }).catch(done);
    }).catch(done);
  });*/
  
  it("Should let two members vote and getresult within proposal", function(done) {
      
      OrganizationsFactory.new({from: creator}).then(
        function (contract) {
        	contract.NewOrganization("ONU", 100, 1000, {from: member1})
        .then(
        	function() { 
            	return contract.organizationID.call();
        }).then (function (ID){
              return contract.organizations.call(ID);
        }).then(
        	function(addr) { 
            	console.log(addr);
	    		organizationAddr = addr;
	    		org = Organization.at(addr);
	    		console.log(0);
	        	org.addMember(member1, {from: member1});
                org.addMember(member2, {from: member1});
                console.log(1);
                org.makeProposal("yolo", "this is yolo", 2000, 3000, {from: member1});
                console.log(2);
            	return org.proposalID.call();
        }).then(
            function(address) { 
            	return org.proposals.call(address);
        }).then(
        	function(address) {
        		console.log(address);
            	p = Proposal.at(address);
            	proposalAddress = address;
            	console.log(4);
            	org.vote(false, 2, proposalAddress, {from: member1});
            	org.vote(true, 1, proposalAddress, {from: member2});
            	console.log(5);
            	return org.balances.call(member1);
        }).then(
            function(address) { 
              console.log(6);
              assert.equal(address.toString(), 96, "New token_count is not correct!");
            	return p.nbVoters.call();
        }).then(
            function(nbvo) { 
	     		assert.equal(nbvo.toString(), 2, "there are not 2 nbVoters");	        	
         		return p.forVotes.call();
        }).then(
            function(bla) { 
	     		assert.equal(bla, 1, "there are not 2 nbVoters");	        	
              	return p.againstVotes.call()
        }).then(
            function(count) { 
              assert.equal(count.toString(), 2, "New token_count is not correct!");
              p.Results();
             return p.result.call()
        }).then(
            function(num) { 
              assert.equal(num.toString(), 0, "The result is not 0");
              done()
        }).catch(done);
    }).catch(done);
  });

it("Should let two members vote and getresult within proposal", function(done) {
      
      OrganizationsFactory.new({from: creator}).then(
        function (contract) {
        	contract.NewOrganization("ONU", 100, 1000, {from: member1})
        .then(
        	function() { 
            	return contract.organizationID.call();
        }).then (function (ID){
              return contract.organizations.call(ID);    	
        }).then(
        	function(addr) { 
            	console.log(addr);
	    		organizationAddr = addr;
	    		org = Organization.at(addr);
	    		console.log(0);
	        	org.addMember(member1, {from: member1});
                org.addMember(member2, {from: member1});
                console.log(1);
                org.makeProposal("yolo", "this is yolo", 2000, 3000, {from: member1});
                console.log(2);
            	return org.proposalID.call();
        }).then(
            function(address) { 
            	console.log(3);
            	console.log(address);
            	return org.proposals.call(address);
        }).then(
        	function(address) {
        		console.log(address);
            	p = Proposal.at(address);
            	proposalAddress = address;
            	console.log(4);
            	org.vote(false, 2, proposalAddress, {from: member1});
            	org.vote(true, 1, proposalAddress, {from: member2});
            	org.getResult(proposalAddress);
            	return org.proposalID.call();
        }).then(
            function(count) { 
              assert.equal(count.toString(), 1, "The result should be 0 = vote rejected");
            	return org.propResults.call(proposalAddress);
        }).then(
            function(count) { 
              assert.equal(count.toString(), 0, "The result should be 0 = vote rejected");
              return org.balances.call(member1);
        }).then(
            function(address) { 
              assert.equal(address.toString(), 98, "New token_count is not correct!");
              return org.balances.call(member2);
        }).then(
        	function(caca) {
        		assert.equal(caca.toString(), 101);
              done();
        }).catch(done);
    }).catch(done);
  });

 });
