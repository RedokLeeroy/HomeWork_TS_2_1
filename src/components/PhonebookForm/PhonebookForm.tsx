import React from 'react';
import { ContactType } from '../../interfaces';
import { FormSubmit } from './FormSubmit';
import { NameInput } from './NameInput';
import { PhoneInput } from './PhoneInput';

type IState = Omit<ContactType, 'id'>;

interface IProp {
  onSubmit: (constact: Partial<ContactType>) => void;
}

export class PhonebookForm extends React.Component<IProp, IState> {
  state = {
    name: '',
    phone: '',
  };

  handlerInput = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target as EventTarget & { name: keyof IState; value: keyof IState };
    return this.setState({ [name]: value } as Readonly<IState>);
  };

  handSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.setState({ name: '', phone: '' });
  };

  render() {
    const { name, phone } = this.state;
    return (
      <form onSubmit={this.handSubmit}>
        <NameInput value={name} name="name" func={this.handlerInput}></NameInput>
        <PhoneInput value={phone} name="phone" func={this.handlerInput}></PhoneInput>
        <FormSubmit title="Add contact"></FormSubmit>
      </form>
    );
  }
}
