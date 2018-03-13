import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html',
	styleUrls: ['documents.component.css']
})
export class DocumentsComponent {
	pageTitle: string = "Document Dashboard"
	documents: Document[] = [
		{
			title: "My First Document",
			description: "Some Description",
			file_url: 'http://docs.google.com',
			updated_at: '2018-03-12',
			image_url: 'http://echeck.org/wp-content/uploads/2017/10/Best-And-Cheapest-Ways-to-Pay-Freelancers-Online-cover-image.png'
		},
		{
			title: "My Second Document",
			description: "Some Description",
			file_url: 'http://docs.google.com',
			updated_at: '2018-03-12',
			image_url: 'https://702rc195vu6fsa4x3pnb6d8m-wpengine.netdna-ssl.com/wp-content/uploads/2017/01/freelancer-16-9.jpg'
		},
		{
			title: "My Third Document",
			description: "Some Description",
			file_url: 'http://docs.google.com',
			updated_at: '2018-03-12',
			image_url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2016/04/freelancersecrets.jpg'
		}
	]
}