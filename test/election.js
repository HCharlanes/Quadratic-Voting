contract('Election', function(accounts) {
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
