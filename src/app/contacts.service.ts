import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface PersonContact {
  id: number;
  address: string;
  email: string;
  firstnamee: string;
  image: string;
  lastnamee: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private apiUrl = 'https://aws.blaqueyard.com/api/personcontacts';

  constructor(private http: HttpClient) {}

  getPersonContacts(): Observable<PersonContact[]> {
    return this.http.get<PersonContact[]>(this.apiUrl);
  }
}
