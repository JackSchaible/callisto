import { NewFormComponent } from './new-form/new-form.component';
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

@NgModule({
	declarations: [AppComponent, NumericDirective, NewFormComponent, SidebarComponent],
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
