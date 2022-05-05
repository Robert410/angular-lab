import { Component, OnInit } from '@angular/core';
import {VacationsService} from '../vacations.service';
import {Vacation} from '../types';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-my-vacations-page',
  templateUrl: './my-vacations-page.component.html',
  styleUrls: ['./my-vacations-page.component.css']
})
export class MyVacationsPageComponent implements OnInit {
  vacations: Vacation[] = [];
  elemnt: string | undefined;
  constructor(
    private vacationsService: VacationsService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.vacationsService.getVacations()
      .subscribe(vacations => this.vacations = vacations);
    this.elemnt = sessionStorage.getItem('message')?.toString();
    if(this.elemnt)
      this.dialog.open(DialogElementsExampleDialog);
  }

  deleteId(vacationId:string):void{
    sessionStorage.setItem('message',"The record has been save");
    this.vacationsService.deleteVacation(vacationId)
    .subscribe(() => {
      this.vacations = this.vacations.filter(
        vacation => vacation.id !== vacationId
      );
    });
  }
  onDeleteClicked(vacationId: string): void {
    if(confirm("Are you sure to delete ?")) {
      this.deleteId(vacationId);
    }
  }
}

@Component({
  selector: 'dialog-elements-example-dialog',
  templateUrl: '../dialog-element.html',
})
export class DialogElementsExampleDialog {}