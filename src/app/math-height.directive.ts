import { Directive, ElementRef, AfterViewChecked, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[myMatchHeight]'
})
export class MathHeightDirective implements AfterViewChecked {

	@Input()
	myMatchHeight: string;

  constructor(private el: ElementRef) { }

  ngAfterViewChecked() {
      this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

    matchHeight(parent: HTMLElement, className: string) {
        const children = parent.getElementsByClassName("item");
        if (!children) return;
        Array.from(children).forEach((x: HTMLElement) => {
            x.style.height = 'initial';
        });
        const itemHeights = Array.from(children)
          .map(x => x.getBoundingClientRect().width);
        const maxHeight = itemHeights.reduce((prev, curr) => {
            return curr > prev ? curr : prev;
        }, 0);
       	Array.from(children)
            .forEach((x: HTMLElement) => x.style.height = `${maxHeight}px`);
    }

    @HostListener('window:resize') 
    onResize() {
        // call our matchHeight function here
        this.matchHeight(this.el.nativeElement, this.myMatchHeight);
    }

}
