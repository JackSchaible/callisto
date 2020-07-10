import { ITemplate } from './../app.models';
import { StoreService } from './../store.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'clst-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
	constructor(public store: StoreService) {}

	ngOnInit(): void {}

	public deleteTemplate(template: ITemplate): void {}
}
