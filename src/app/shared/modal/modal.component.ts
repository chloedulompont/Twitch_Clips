import { Component, OnInit, Input } from '@angular/core';
import {ModalService} from "./service/modal.service";
import {
  IconDefinition,
  faXmark
} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  @Input()
  modalId !: string;

  private opened: boolean = false;

  public closeIcon: IconDefinition = faXmark

  constructor(
    private modalService: ModalService
  ) { }

  ngOnInit(): void {
  }

  public isOpen(): boolean{
    return this.opened
  }

  open(): void{
    this.modalService.openModal(this.modalId);
    this.opened = true;
  }

  close(): void{
    this.modalService.closeModal(this.modalId);
    this.opened = false;
  }

}
