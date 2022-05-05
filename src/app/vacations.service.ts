import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vacation} from './types';
import { environment } from 'src/envinronment';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class VacationsService {
  private _URL = environment._URL;

  constructor(
    private http: HttpClient,
  ) { }

  getVacations(): Observable<Vacation[]>{
    return this.http.get<Vacation[]>(this._URL + 'backend-get-all.php');
  }

  getVacationById(id: string): Observable<Vacation> {
    return this.http.get<Vacation>(this._URL + `backend-get-by-id.php?id=${id}`);
  }


  deleteVacation(id: string): Observable<any> {
    return this.http.get(this._URL + `backend-delete-destinations.php?id=${id}`);
  }

  createVacation(city: string, country: string, description: string, targets: string, cost: string): Observable<Vacation>{
    return this.http.post<Vacation>(
      this._URL + 'backend-add-destinations.php',
      {city, country, description, targets, cost },
      httpOptions,
    );
  }

  editVacation(id: any, city: string, country: string, description: string, targets: string, cost: string): Observable<Vacation>{
    return this.http.post<Vacation>(
      this._URL + `backend-update-destinations.php?id=${id}`,
      {id, city, country, description, targets, cost },
      httpOptions,
    );
  }
}
