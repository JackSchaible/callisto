import { StoreService } from './store.service';
import { IRecipe, IComponent, ITemplate } from './app.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(private fb: FormBuilder, public store: StoreService) {}

	public editingRecipe: ITemplate;
	public schematic: IRecipe;

	public ngOnInit(): void {
		this.store.save({
			templates: [
				{
					name: 'Iron Ore',
					craftingSpeedInSeconds: 0.5,
					itemsProduced: 1,
					components: [],
				},
			],
			schematics: [],
		});

		this.editingRecipe = {
			craftingSpeedInSeconds: undefined,
			itemsProduced: undefined,
			name: undefined,
			components: [],
		};
	}

	public calculate(recipe: IRecipe): void {
		recipe.unitsRequired = Math.ceil(
			(recipe.targetPerSecond *
				recipe.template.craftingSpeedInSeconds *
				(recipe.speedModifier / 100)) /
				recipe.template.itemsProduced
		);
	}
}
