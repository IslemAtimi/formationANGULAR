import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appImageTransform]'
})
export class ImageTransformDirective {
  @Input('appImageTransform') src:string="";

  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log("je suis le constructeur",this.el.nativeElement)
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    
  }
  ngOnChanges(): void {
    console.log("je suis le hook OnChanges")
    if(this.src==""){
      this.el.nativeElement.style["text-decoration"]="underline"
    }
  }


}
