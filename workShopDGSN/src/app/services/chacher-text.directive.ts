import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[myUnless]'
})
export class ChacherTextDirective {
  @Input() set myUnless(condition: boolean) {
    if (!condition) {
      this._viewContainer.createEmbeddedView(this._templateRef);
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }

  constructor(
    private _templateRef: TemplateRef<any>,
    private _viewContainer: ViewContainerRef
  ) { 
    
  }


}
