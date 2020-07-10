import { NewTemplateFormComponent } from './new-template-form/new-template-form.component';
import { NumericDirective } from './numeric.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SidebarComponent } from './sidebar/sidebar.component';
import { SchematicComponent } from './schematic/schematic.component';
import { NewSchematicFormComponent } from './new-schematic-form/new-schematic-form.component';
import { NewFactoryFormComponent } from './new-factory-form/new-factory-form.component';

@NgModule({
	declarations: [
		AppComponent,
		NumericDirective,
		NewTemplateFormComponent,
		SidebarComponent,
		SchematicComponent,
		NewSchematicFormComponent,
		NewFactoryFormComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		FormsModule,
		ReactiveFormsModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
