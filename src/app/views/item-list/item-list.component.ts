import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {

  @Input() items:any=[];

  constructor() { 
  }
  
  ngOnInit(): void {
  }

}
