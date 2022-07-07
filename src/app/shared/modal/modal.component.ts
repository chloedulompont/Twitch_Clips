import {Component, OnInit, OnDestroy, Input, ElementRef} from '@angular/core';
import {ModalService} from "../../services/modal.service";
import {
  IconDefinition,
  faXmark
} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId: string = '';
  public closeIcon: IconDefinition = faXmark;

  constructor(
    public modalService: ModalService,
    public el:ElementRef
  ) { }

  ngOnInit(): void {
    document.body.appendChild(this.el.nativeElement);
  }

  close(): void{
    this.modalService.toggleModal(this.modalId)
  }


  ngOnDestroy(): void {
    document.body.removeChild(this.el.nativeElement);
  }


}
