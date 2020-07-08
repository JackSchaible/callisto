import { ITemplate, IComponent } from '../app.models';
import {
	FormBuilder,
	FormGroup,
	Validators,
	FormControl,
	AbstractControl,
	ValidationErrors,
} from '@angular/forms';
import { StoreService } from '../store.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, startWith, map } from 'rxjs/operators';

@Component({
	selector: 'app-new-form',
	templateUrl: './new-template-form.component.html',
	styleUrls: ['./new-template-form.component.scss'],
})
export class NewTemplateFormComponent implements OnInit {
	private numRegex = /\d+(\.\d+)?/g;
	public name = new FormControl('', [Validators.required]);
	public number = new FormControl('', [
		Validators.required,
		Validators.pattern(this.numRegex),
	]);
	public speed = new FormControl('', [
		Validators.required,
		Validators.pattern(this.numRegex),
	]);
	public newComponentName = new FormControl('', [
		Validators.required,
		(control: AbstractControl): ValidationErrors | null => {
			if (
				!!this.store.data.templates.find(
					(template: ITemplate) => template.name === control.value
				)
			)
				return null;
			else return { match: false };
		},
	]);
	public filteredOptions: Observable<ITemplate[]>;
	public newComponentNumber = new FormControl('', [
		Validators.required,
		Validators.pattern(this.numRegex),
	]);

	public components: IComponent[] = [];

	public form: FormGroup = this.fb.group({
		name: this.name,
		number: this.number,
		speed: this.speed,
		newComponent: this.fb.group({
			name: this.newComponentName,
			number: this.newComponentNumber,
		}),
	});

	constructor(private fb: FormBuilder, private store: StoreService) {}

	public ngOnInit(): void {
		this.filteredOptions = this.newComponentName.valueChanges.pipe(
			debounceTime(500),
			startWith(''),
			map((value: string): ITemplate[] =>
				this.store.data.templates.filter((template: ITemplate) =>
					template.name.indexOf(value)
				)
			)
		);
	}

	public addComponent(): void {
		const component: IComponent = {
			recipe: {
				...this.store.data.templates.find(
					(recipe: ITemplate) =>
						recipe.name === this.newComponentName.value
				),
			},
			numberRequired: +this.newComponentNumber.value,
		};

		this.newComponentName.patchValue('');
		this.newComponentNumber.patchValue('');

		this.components.push(component);
	}

	public addItem(): void {
		if (!this.name.valid || !this.number.valid || !this.speed.valid) return;

		this.store.addTemplate({
			components: this.components,
			craftingSpeedInSeconds: +this.speed.value,
			itemsProduced: +this.number.value,
			name: this.name.value,
		});

		this.components = [];
		this.form.reset();
	}

	public removeComponent(component: IComponent): void {
		const index = this.components.findIndex(
			(c: IComponent) => c === component
		);

		this.components.splice(index, 1);
	}
}
