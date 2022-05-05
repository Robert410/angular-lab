import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {VacationsService} from '../vacations.service';

@Component({
  selector: 'app-new-vacation-page',
  templateUrl: './new-vacation-page.component.html',
  styleUrls: ['./new-vacation-page.component.css']
})
export class NewVacationPageComponent implements OnInit {
  elemnt: string | undefined;

  constructor(
    private router: Router,
    private vacationsService: VacationsService,
  ) { }

  ngOnInit(): void {
    this.elemnt = sessionStorage.getItem("message")?.toString();
  }

  // @ts-ignore
  onSubmit({city, country, description, targets, cost}): void {
    sessionStorage.setItem('message',"The record has been save");
    this.vacationsService.createVacation(city, country, description, targets, cost)
      .subscribe( () => {
        this.router.navigateByUrl('/my-vacations');
      });
  }

}
