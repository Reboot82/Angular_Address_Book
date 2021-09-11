import { stripSummaryForJitNameSuffix } from '@angular/compiler/src/aot/util';
import { Component, OnInit } from '@angular/core';
import { Contact } from './../../models/Contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  contacts: Contact[] | undefined;

  inputContact: string = '';

  constructor() {}

  ngOnInit(): void {
    this.contacts = [
      {
        content: 'First Contact',
        favorite: false,
      },
      {
        content: 'Brian Starnes',
        favorite: true,
      },
    ];
  }

  toggleFavorite(id: number): void {
    this.contacts?.map((v, i) => {
      if (i == id) v.favorite = !v.favorite;

      return v;
    });
  }

  deleteContact(id: number) {
    this.contacts = this.contacts?.filter((v, i) => i !== id);
  }

  addContact() {
    if (this.inputContact != '') {
      this.contacts?.push({
        content: this.inputContact,
        favorite: false,
      });
    }

    this.inputContact = '';
  }
}
