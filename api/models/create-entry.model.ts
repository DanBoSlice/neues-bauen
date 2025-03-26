import { GuestbookHouseStyleModel } from './guestbook-house-style.model';
import {
  messageMaxLength,
  messageMinLength,
  nameMaxLength,
  nameMinLength,
} from '../../src/pages/Guestbook/guestbook-config';

export class CreateEntryModel {
  message: string;
  name: string;
  houseStyle: GuestbookHouseStyleModel;

  constructor(body: any) {
    this.message = (body?.message ?? '').trim().substring(0, messageMaxLength);
    this.name = (body?.name ?? '').trim().substring(0, nameMaxLength);
    this.houseStyle = new GuestbookHouseStyleModel(body?.houseStyle);
  }

  isValid(): boolean {
    return this.message.length >= messageMinLength &&
      this.name.length >= nameMinLength &&
      this.houseStyle.isValid();
  }
}
