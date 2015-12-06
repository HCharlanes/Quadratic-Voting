import "Organization";
contract OrganizationsFactory {  // can be killed, so the owner gets sent the money in the end

//states of the Organization Factory
address public factoryManager;
uint public numOrganizations;
uint public organizationID;
address[] public organizations;
mapping(address => uint) organizationIDs;


event NewMember(address _new); // so you can log the event
event DeletedMember(address _old); // so you can log the event

//address[] public caca;
    function OrganizationsFactory(){
        factoryManager = msg.sender;
        numOrganizations = 0;
        organizationID = 0;
        organizations.push(0);
    }

	function NewOrganization (bytes32 name, uint basetokens, uint minNotice) {
		address org = new Organization(name, basetokens, minNotice , msg.sender);
		organizations.push(org);
		numOrganizations++;
		organizationID++;
		organizationIDs[org] = organizationID;
	}
	
	function DeleteOrganization (address addrOrganization) {
		if (msg.sender != Organization(addrOrganization).organizationOwner()) {return; }
		numOrganizations--;
		Organization(addrOrganization).destroy();
	}


	function destroy() {
		if (msg.sender == factoryManager) { // without this funds could be locked in the contract forever!
			suicide(factoryManager);
		}
	}
}
