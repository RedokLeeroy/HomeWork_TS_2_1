import React from 'react';
import { PhonebookForm } from './PhonebookForm/PhonebookForm';
import { Section } from './Section/Section';
import { nanoid } from 'nanoid';
import { Contacts } from './Contacts/Contacts';
import { FindByName } from './FindByName/FindByName';
import { ContactType } from '../interfaces';

interface IState {
  contacts: ContactType[];
}

export class App extends React.Component<unknown, IState> {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', phone: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', phone: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', phone: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', phone: '227-91-26' },
    ],
    filter: '',
  };

  handlerSubmit = (contact: Partial<ContactType>) => {
    const isHere = this.state.contacts.some(({ name }) => name === contact.name);
    if (isHere) {
      alert(`Name already in contacts`);
      return;
    }

    this.setState(ps => ({ contacts: [...ps.contacts, { ...contact, id: nanoid() }] as ContactType[] }));
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = event.target as EventTarget & { value: keyof IState };
    this.setState({ filter: value } as unknown as Readonly<IState>);
  };

  handleFilters = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
  };

  handleDelete = (id: string) => {
    this.setState(ps => ({ contacts: ps.contacts.filter(el => el.id !== id) }));
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="phonebook">
          <PhonebookForm onSubmit={this.handlerSubmit} />
        </Section>
        <Section title="Contacts">
          <FindByName value={filter} onChange={this.handleChange} />
          <Contacts contact={this.handleFilters()} onDelete={this.handleDelete} />
        </Section>
      </>
    );
  }
}
