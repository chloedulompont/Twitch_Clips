import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() control: FormControl = new FormControl('');
  @Input() inputType: string = 'text';
  @Input() placeholder: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
