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
      {
        customerId: 'ABCDEF',
        companyName: 'CompanyName, LLC',
        contactName: 'John Businessman',
        contactTitle: 'Bossdude',
        address: '123 Madeup Rd.',
        city: 'Blam',
        email: 'fiuvnwevl@gmail.com',
        postalCode: '12345',
        favorite: false,
        country: 'N/A',
        phone: '234-456-2345',
        fax: '352252354',
      },
      {
        customerId: 'ABCDEFG',
        companyName: 'CompanyName, Inc.',
        contactName: 'John Q. Businessman',
        contactTitle: 'Upper Management',
        address: '1234 Madeup Rd.',
        city: 'Wham',
        email: 'wericubqer@gmail.com',
        postalCode: '22345',
        favorite: true,
        country: 'America',
        phone: '234-876-2945',
        fax: '234-567-4567',
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
