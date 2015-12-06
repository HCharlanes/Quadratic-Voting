// FlowRouter.route("/", {
//     name: 'Index',
//     subscriptions(params) {

//     },
//     action(params) {
//         ReactLayout.render(VotingApp);
//     }
// });

FlowRouter.route("/", {
    name: 'Index',
    subscriptions(params) {

    },
    action(params) {
        renderWithBasicLayout(<Index />, {organization: undefined})
    }
});

FlowRouter.route("/orgs/:organization/proposals", {
    name: 'Proposals',
    subscriptions(params) {

    },
    action(params) {
        renderWithBasicLayout(<ProposalList organizationAddress={params.organization}/>, {organization: params.organization})
    }
});

FlowRouter.route("/orgs/:organization/proposals/:address", {
    name: 'Vote',
    subscriptions(params) {

    },
    action(params) {
        renderWithBasicLayout(<VotingPanel proposalAddress={params.address} organizationAddress={params.organization}/>,{organization: params.organization})
    }
});

FlowRouter.route("/orgs/:organization/members", {
    name: 'Members',
    subscriptions(params) {

    },
    action(params) {
        renderWithBasicLayout(<MembersPane organizationAddress={params.organization}/>, {organization: params.organization})
    }
});

function renderWithBasicLayout(content, params) {
	return ReactLayout.render(BasicLayout, {
		content: content,
		header: <Header organization={params.organization}/>
	} )
}
