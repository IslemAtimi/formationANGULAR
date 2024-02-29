import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[important]'
})
export class ImportantDirective implements OnInit {

  @Input("important") isImportant:boolean = false

  constructor(private element: ElementRef) { 
    
  }
  ngOnInit(): void {
    if (this.isImportant) {
      this.highlight()
    }
  }

  private highlight() {
    this.element.nativeElement.style["text-decoration"] = 'underline'
  }

}
