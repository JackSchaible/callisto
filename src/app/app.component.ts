import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'callisto';

	public recipes: IRecipe[];
	public currentRecipeName: string;

	public ngOnInit(): void {
		this.recipes = [
			{
				name: 'Copper Plates',
				craftingSpeedPerSecond: 3.2,
				speedModifier: 1,
				itemsProduced: 1,
				desiredRate: 1,
				unitsRequired: 0,
				components: [
					{
						name: 'Iron Ore',
						craftingSpeedPerSecond: 0.5,
						speedModifier: 1,
						itemsProduced: 1,
						desiredRate: 1,
						unitsRequired: 0,
						components: [],
					},
				],
			},
		];
	}

	public addItem(): void {
		this.recipes.push({
			name: this.currentRecipeName,
			craftingSpeedPerSecond: 1,
			speedModifier: 1,
			itemsProduced: 1,
			desiredRate: 1,
			unitsRequired: 0,
			components: [],
		});
		this.currentRecipeName = undefined;
	}
}

interface IRecipe {
	name: string;
	craftingSpeedPerSecond: number;
	itemsProduced: number;
	speedModifier: number;
	desiredRate: number;
	unitsRequired: number;
	components: IRecipe[];
}
