import { Directive, ElementRef, Input, OnInit, PipeTransform, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective implements OnInit {
  @Input('appUnderline') src:string="";
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log(el)

}

ngOnInit(): void {
  console.log(this.src)
  if(this.src==""){
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', 'underline');
    this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');

}
}

}
