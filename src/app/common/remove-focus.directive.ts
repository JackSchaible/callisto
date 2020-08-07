import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
	selector: '[clstDeselect]',
})
export class FocusRemoverDirective {
	constructor(private element: ElementRef) {}

	@HostListener('click')
	onClick(): void {
		this.element.nativeElement.blur();
	}
}
