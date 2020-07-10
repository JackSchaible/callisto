import {
	automationSciencePack,
	automationSciencePacks,
	ironGearWheel,
	copperPlate,
	ironPlate,
	copperOre,
	ironOre,
	level1Factory,
} from './recipes';
import { StoreService } from './store.service';
import { ISchematic, ITemplate } from './app.models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
	selector: 'clst-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	constructor(private fb: FormBuilder, public store: StoreService) {}

	public editingRecipe: ITemplate;
	public schematic: ISchematic;

	public unitsRequired: number;

	public ngOnInit(): void {
		this.store.save({
			templates: [
				automationSciencePack,
				ironGearWheel,
				copperPlate,
				ironPlate,
				copperOre,
				ironOre,
			],
			schematics: [automationSciencePacks],
			factories: [level1Factory],
		});

		this.editingRecipe = {
			craftingSpeedInSeconds: undefined,
			itemsProduced: undefined,
			name: undefined,
			components: [],
		};
	}

	public calculate(recipe: ISchematic): void {
		this.unitsRequired = Math.ceil(
			(recipe.targetPerSecond *
				recipe.template.craftingSpeedInSeconds *
				(recipe.factory.craftingSpeedModifierInPercent / 100)) /
				recipe.template.itemsProduced
		);
	}
}
