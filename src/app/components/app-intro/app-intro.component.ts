import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-app-intro',
  templateUrl: './app-intro.component.html',
  styleUrls: ['./app-intro.component.css']
})
export class AppIntroComponent implements OnInit {
  public appTitle: string = environment.title;

  constructor() { }

  ngOnInit(): void {
  }

}
