import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() labelButton: string;
  @Input() buttonName: string;
  @Output() clicButtonEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
    if (!this.labelButton) {
      this.labelButton = 'BUTTON-LABEL-DEFAULT';
    }
  }

  buttonClic(value: string) {
    this.clicButtonEvent.emit(value);
  }

}
