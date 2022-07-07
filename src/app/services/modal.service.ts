import { Injectable } from '@angular/core';

interface Modal{
  id: string;
  isVisible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: Array<Modal> = [];

  constructor() { }

  register(id: string): void{
    this.modals.push({
      id: id,
      isVisible: false
    });
  }

  unregister(id: string): void{
    this.modals = this.modals.filter(modal => modal.id !== id);
  }

  isModalOpen(id: string): boolean{
    return !!this.modals.find(modal => modal.id === id)?.isVisible;
  }

  toggleModal(id: string): void{
    const modal = this.modals.find(modal => modal.id === id);
    if(modal){
      modal.isVisible = !modal.isVisible;
    }
  }
}
