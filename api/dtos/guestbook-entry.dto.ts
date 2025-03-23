import { GuestbookHouseStyle } from '@api/dtos/guestbook-house-style';

export interface GuestbookEntryDto {
  id: string;
  author: string;
  message: string;
  houseStyle: GuestbookHouseStyle;
}
