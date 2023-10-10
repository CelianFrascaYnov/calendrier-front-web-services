import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Calendar } from '../model/calendrier.model';

@Injectable({
  providedIn: 'root',
})
export class CalendrierService {
  private apiUrl = 'http://localhost:8080'; // URL de votre API REST

  constructor(private http: HttpClient) {}

  getCalendrier(annee: number, mois: number): Observable<Calendar> {
    const params = new HttpParams()
      .set('annee', annee.toString())
      .set('mois', mois.toString());

    return this.http.get<Calendar>(`${this.apiUrl}/calendrier`, { params });
  }
}
