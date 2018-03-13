import { Component } from '@angular/core';
import { Document } from './document';

@Component({
	moduleId: module.id,
	selector: 'documents',
	templateUrl: 'documents.component.html'
})
export class DocumentsComponent {
	pageTitle: string = "Dcoument Dashboard"
	documents: Document[] = [
		{
			title: "My First Document",
			description: "Some Description",
			file_url: 'http://docs.google.com',
			updated_at: '2018-03-12',
			image_url: 'http://img.google.com'
		},
		{
			title: "My Second Document",
			description: "Some Description",
			file_url: 'http://docs.google.com',
			updated_at: '2018-03-12',
			image_url: 'http://img.google.com'
		},
		{
			title: "My Third Document",
			description: "Some Description",
			file_url: 'http://docs.google.com',
			updated_at: '2018-03-12',
			image_url: 'http://img.google.com'
		}
	]
}