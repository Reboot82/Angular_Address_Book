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

  customerId: string = '';
  companyName: string = '';
  contactName: string = '';
  contactTitle: string = '';
  address: string = '';
  city: string = '';
  email: string = '';
  postalCode: string = '';
  favorite: boolean = false;
  country: string = '';
  phone: string = '';
  fax: string = '';

  constructor() {}

  ngOnInit(): void {
    this.contacts = [
      
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
    if (this.customerId != '') {
      this.contacts?.push({
        customerId: this.customerId,
        companyName: this.companyName,
        contactName: this.contactName,
        contactTitle: this.contactTitle,
        address: this.address,
        city: this.city,
        email: this.email,
        postalCode: this.postalCode,
        favorite: false,
        country: this.country,
        phone: this.phone,
        fax: this.fax,
      });
    }

    this.customerId = '',
    this.companyName = '',
    this.contactName = '',
    this.contactTitle = '',
    this.address = '',
    this.city = '',
    this.email = '',
    this.postalCode = '',
    this.country = '',
    this.phone = '',
    this.fax = ''
  }
}
