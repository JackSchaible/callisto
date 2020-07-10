import { ISchematic } from './../app.models';
import { StoreService } from './../store.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'clst-new-schematic-form',
	templateUrl: './new-schematic-form.component.html',
	styleUrls: ['./new-schematic-form.component.scss'],
})
export class NewSchematicFormComponent implements OnInit {
	public name: FormControl = new FormControl('');
	public form: FormGroup = this.fb.group({
		name: this.name,
	});

	constructor(private fb: FormBuilder, private store: StoreService) {}

	ngOnInit(): void {}

	public add(): void {
		const schema: ISchematic = {
			name: this.name.value,
			targetPerSecond: 0,
			template: undefined,
			factory: undefined,
		};
		this.store.addSchematic(schema);
		this.form.reset();
	}
}
