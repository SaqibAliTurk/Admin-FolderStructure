import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.css'],
})
export class CustomSelectComponent implements OnInit {
  faAngleDown = faAngleDown;
  @Input() name = '';
  @Input() defaultValue = '';
  @Input() values: string[] = [];
  @Input() label = '';
  @Input() disabled = true;

  @Output() valueChanged = new EventEmitter<{ value: string }>();

  @Input() control = new FormControl();

  constructor() {}

  ngOnInit(): void {}

  onSelectValue(value: string) {
    this.valueChanged.emit({ value });
  }
}
