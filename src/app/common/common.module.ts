import { FocusRemoverDirective } from './remove-focus.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [FocusRemoverDirective],
	exports: [FocusRemoverDirective],
	imports: [CommonModule],
})
export class ClstCommonModule {}
