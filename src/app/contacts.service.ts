import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PersonContact {
  id: number;
  firstnamee: string;
  lastnamee: string;
  email: string;
  phone: string;
  address: string;
  image: string;
}

export interface PersonContactResponse {
  data: PersonContact[];
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = 'https://aws.blaqueyard.com/api/personcontacts';

  constructor(private http: HttpClient) {}

  getPersonContacts(): Observable<PersonContactResponse[]> {
    return this.http.get<PersonContactResponse[]>(this.apiUrl);
  }
}
