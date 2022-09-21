import { LightningElement, wire } from 'lwc';
import FNAME from '@salesforce/schema/Contact.FirstName'
import LNAME from '@salesforce/schema/Contact.LastName'
import EMAIL from '@salesforce/schema/Contact.Email'
import getContacts from '@salesforce/apex/ContactController.getContacts'
import { reduceErrors } from 'c/ldsUtils'

const COLUMNS = [
    {Label: 'First Name', fieldName: FNAME.fieldApiName, type: 'text'},
    {Label: 'Last Name', fieldName: LNAME.fieldApiName, type: 'text'},
    {Label: 'Email', fieldName: EMAIL.fieldApiName, type: 'email'}
]

export default class ContactList extends LightningElement {
    collumns = COLUMNS;
    @wire(getContacts)
    contacts;
    get errors() {
        return (this.contacts.error) ?
            reduceErrors(this.contacts.error) : [];
    }
}