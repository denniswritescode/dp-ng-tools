import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dp-cell',
  templateUrl: './cell.component.html',
  styleUrls: ['./cell.component.css']
})
export class DPCellComponent implements OnInit {

  @Input() public column: string;
  @Input() public scope: { [key: string]: any };

  constructor() { }

  ngOnInit(): void {
  }

}
