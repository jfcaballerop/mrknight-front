import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassSelectorService } from '@appCore';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() labelButton: string;
  @Input() buttonName: string;
  @Input() className: string;
  @Output() clicButtonEvent = new EventEmitter<string>();

  classValue: string;
  constructor(protected classSelectorSvc: ClassSelectorService) {
    console.log('className', this.className);

    this.classValue = classSelectorSvc.getBootstrapButtonClass(this.className);
  }

  ngOnInit(): void {
    if (!this.labelButton) {
      this.labelButton = 'BUTTON-LABEL-DEFAULT';
    }
    console.log('className', this.className);
    this.classValue = this.classSelectorSvc.getBootstrapButtonClass(this.className);
    console.log('classValue', this.classValue);

  }

  buttonClic(value: string): void {
    this.clicButtonEvent.emit(value);
  }

}
