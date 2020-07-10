import { ISchematic, ITemplate, IFactory } from './app.models';

export const level1Factory: IFactory = {
	name: 'Level 1 Factory',
	craftingSpeedModifierInPercent: 50,
};

export const copperOre: ITemplate = {
	name: 'Copper Ore',
	itemsProduced: 1,
	craftingSpeedInSeconds: 0.5,
	components: [],
};

export const copperPlate: ITemplate = {
	name: 'Copper Plate',
	itemsProduced: 1,
	craftingSpeedInSeconds: 3.2,
	components: [
		{
			numberRequired: 1,
			template: copperOre,
		},
	],
};

export const ironOre: ITemplate = {
	name: 'Iron Ore',
	itemsProduced: 1,
	craftingSpeedInSeconds: 0.5,
	components: [],
};

export const ironPlate: ITemplate = {
	name: 'Iron Plate',
	itemsProduced: 1,
	craftingSpeedInSeconds: 3.2,
	components: [
		{
			numberRequired: 1,
			template: ironOre,
		},
	],
};

export const ironGearWheel: ITemplate = {
	name: 'Iron Gear Wheel',
	craftingSpeedInSeconds: 0.5,
	itemsProduced: 1,
	components: [
		{
			numberRequired: 2,
			template: ironPlate,
		},
	],
};

export const automationSciencePack: ITemplate = {
	name: 'Automation Science Pack',
	itemsProduced: 1,
	craftingSpeedInSeconds: 12,
	components: [
		{
			numberRequired: 1,
			template: ironGearWheel,
		},
		{
			numberRequired: 1,
			template: copperPlate,
		},
	],
};

export const automationSciencePacks: ISchematic = {
	name: 'Automation Science Packs',
	targetPerSecond: 1,
	template: automationSciencePack,
	factory: level1Factory,
};
