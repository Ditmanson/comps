import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
@Input() data = [] as any;
@Input() headers = [] as any;
@Input('class') classNames = '';
}
