import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
	moduleId: module.id,
	selector: 'proposal-list',
	templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
	pageTitle: string = "Proposals List",
	proposalOne: Proposal = new Proposal(1, 'SacENT', 'http://sacent.com', 'Ruby on Rails, Angular, SQL, Ubuntu', 160, 75, 3, 'support@sacent.com')
	proposalTwo: Proposal = new Proposal(2, 'Wolfpack Gaming', 'http://wolfpack-gamin.com', 'Ruby on Rails', 240, 75, 4, 'admin@wolfpackgaming.com')
	proposalThree: Proposal = new Proposal(3, 'Roxi Deli', 'http://roxideli.com', 'Ruby on Rails, Angular, SQL, Ubuntu', 160, 75, 3, 'support@sacent.com')

	proposals: Proposal[] = [
			this.proposalOne,
			this.proposalTwo,
			this.proposalThree
		]
}