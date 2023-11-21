import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() name: string;
  @Input() classes: string;
  @Output() click = new EventEmitter<any>();

  handleClick(event: any) {
    event.stopPropagation();
    this.click.emit();
  }

}

