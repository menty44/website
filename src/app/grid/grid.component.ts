import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';

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


@Component({
  selector: 'app-grid',
  imports: [],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {

  switcher: string = 'list';
  contacts: any = [];
  loading = false;
  error: string | null = null;

  constructor(private personContactsService: ContactsService) { }

  ngOnInit(): void {
    this.loadContacts();
  }

  private loadContacts(): void {
    this.loading = true;
    this.error = null;

    this.personContactsService.getPersonContacts()
      .subscribe({
        next: (data: any) => {
          this.contacts = data;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load contacts. Please try again later.';
          this.loading = false;
          console.error('Error loading contacts:', error);
        }
      });
  }

  toggle(arg0: string) {
    localStorage.setItem('switcher', arg0);
    this.switcher = arg0
  }


}
