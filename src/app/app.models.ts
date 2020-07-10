export interface ITemplate {
	name: string;
	craftingSpeedInSeconds: number;
	itemsProduced: number;
	components: IComponent[];
}

export interface IComponent {
	template: ITemplate;
	numberRequired: number;
}

export interface ISchematic {
	name: string;
	template?: ITemplate;
	targetPerSecond: number;
	factory: IFactory;
}

export interface IData {
	templates: ITemplate[];
	schematics: ISchematic[];
	factories: IFactory[];
}

export interface IFactory {
	name: string;
	craftingSpeedModifierInPercent: number;
}
