import { Component } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrl: './mods-home.component.css'
})
export class ModsHomeComponent {
  modalOpen = false;
  items = [
    {
      title: 'Why is the sky blue?', content: 'The sky is blue because it is.'
    },
    {
      title: 'What does the orange taste like?', content: 'It tatsets like an orange'
    },
    {
      title: 'Who is a good boy', content: 'Your a good boy'
    }
  ]

  onClick() {
    this.modalOpen = !this.modalOpen;
  }
}
