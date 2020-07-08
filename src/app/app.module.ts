import { NewTemplateFormComponent } from './new-template-form/new-template-form.component';
import { NumericDirective } from './numeric.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SchematicComponent } from './schematic/schematic.component';
import { NewSchematicFormComponent } from './new-schematic-form/new-schematic-form.component';

@NgModule({
	declarations: [
		AppComponent,
		NumericDirective,
		NewTemplateFormComponent,
		SidebarComponent,
		SchematicComponent,
		NewSchematicFormComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatInputModule,
		MatAutocompleteModule,
		MatChipsModule,
		MatExpansionModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
