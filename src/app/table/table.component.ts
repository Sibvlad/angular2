import { Component, OnInit } from '@angular/core';
import { PEOPLE } from '../mock-person';




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  name: string;
  title: string;
  people = PEOPLE;
  border = 1;
  cellpadding = 10;


  addToTable(person:string) {
    this.people.push(person);
  }

  removeToTable(index) {
    this.people.splice(index, 1);
  }

  ngOnInit() {
  }

}
