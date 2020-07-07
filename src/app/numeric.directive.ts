import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
	selector: '[appNumeric]',
})
export class NumericDirective {
	constructor(private element: ElementRef) {}

	@HostListener('input', ['$event']) onInputChange(event): void {
		const initalValue = this.element.nativeElement.value;

		this.element.nativeElement.value = initalValue.replace(
			/\d+(.\d+)?/g,
			''
		);
		if (initalValue !== this.element.nativeElement.value) {
			event.stopPropagation();
		}
	}
}
