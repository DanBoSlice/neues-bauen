import { GuestbookHouseStyle } from '@api/dtos/guestbook-house-style';

export interface CreateEntryDto {
  name: string;
  message: string;
  houseStyle: GuestbookHouseStyle;
}
