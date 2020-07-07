export interface ITemplate {
	name: string;
	craftingSpeedInSeconds: number;
	itemsProduced: number;
	components: IComponent[];
}

export interface IComponent {
	recipe: ITemplate;
	numberRequired: number;
}

export interface IRecipe {
	template: ITemplate;
	speedModifier: number;
	unitsRequired: number;
	targetPerSecond: number;
}

export interface IData {
	templates: ITemplate[];
	schematics: IRecipe[];
}
