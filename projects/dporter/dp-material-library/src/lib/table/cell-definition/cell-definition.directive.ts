import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[dpCellDef]',
})
export class DPCellDefinitionDirective {

  @Input() public dpCellDefColumn: string;

  constructor(
    public templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  public getColumn(): string {
    return this.dpCellDefColumn;
  }
}
