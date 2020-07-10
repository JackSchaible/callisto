import { IData, ITemplate, ISchematic } from './app.models';
import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class StoreService implements OnDestroy {
	private dataKey: string = 'clst:data';

	public get data(): IData {
		return this.dataSubject.value;
	}

	private readonly dataSubject = new BehaviorSubject<IData>(null);
	public readonly token$ = this.dataSubject.asObservable();

	constructor() {
		const dataString = localStorage[this.dataKey];

		if (dataString) {
			const data = JSON.parse(dataString) as IData;
			this.dataSubject.next(data);
		} else
			this.dataSubject.next({
				templates: [],
				schematics: [],
				factories: [],
			});
	}

	public ngOnDestroy(): void {
		this.dataSubject.complete();
	}

	public addTemplate(template: ITemplate): void {
		const data = this.dataSubject.value;
		data.templates.push(template);

		this.save(data);
	}

	public addSchematic(schematic: ISchematic): void {
		const data = this.dataSubject.value;
		data.schematics.push(schematic);

		this.save(data);
	}

	public save(data: IData): void {
		localStorage[this.dataKey] = JSON.stringify(data);
		this.dataSubject.next(data);
	}
}
