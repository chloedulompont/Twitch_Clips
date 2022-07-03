import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  modalIds: Array<string> = []

  constructor() { }

  openModal(id: string): void{
    this.modalIds.push(id);
  }

  closeModal(id: string): void{
    this.modalIds = this.modalIds.filter(modalId => modalId !== id);
  }

}
