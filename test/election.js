contract('Election', function(accounts) {
    console.log(accounts);
    var creator = accounts[0];
    var member1 = accounts[1];
    var member2 = accounts[2];
    var orgAddress = Organization.new({from: creator});
    
    it("Should let only the organizer register an election", function(done) {
      Election.new(orgAddress, "samplePosition", "Description",6, 10,{from: creator}).then(
        function (contract) {
            	assert.equal(contract.organization(), orgAddress, "Something went wrong in the creation of the contract!"); 
        }).catch(done);
      }).catch(done);
      /*
      Election.new(orgAddress, "samplePosition", "Description", 6, 19,{from: creator}).then(
          function (contract){})
    });
  */
});
