import { Component, OnInit } from '@angular/core';
import {environment} from "../../../environments/environment";
import {
  faSearch,
  faRightToBracket,
  faUpload,
  faRightFromBracket,
  faFileLines,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  public isConnected: boolean = false;
  public appTitle: string = environment.title;

  /**
   * FontAwesome icons definition
   */
  public faSearch: IconDefinition = faSearch;
  public faRightToBracket: IconDefinition = faRightToBracket;
  public faUpload: IconDefinition = faUpload;
  public faRightFromBracket: IconDefinition = faRightFromBracket;
  public fafileLines: IconDefinition = faFileLines;

  constructor() { }

  ngOnInit(): void {
  }

  openModal(event: Event): void{
    event.preventDefault();
    return;
  }

  logout(event: Event): void{
    event.preventDefault();
    return;
  }

}
