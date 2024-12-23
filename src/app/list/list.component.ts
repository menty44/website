import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

export interface PersonContact {
  id: number;
  address: string;
  email: string;
  firstnamee: string;
  image: string;
  lastnamee: string;
  phone: string;
}

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent  implements OnInit {

  switcher: string = 'list';
  contacts: PersonContact[] = [];
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
        next: (data) => {
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
