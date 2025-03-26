import { GuestbookHouseStyleDto } from '@api/dtos/guestbook-house-style.dto';

export interface GuestbookEntryDto {
  id: string;
  author: string;
  message: string;
  houseStyle: GuestbookHouseStyleDto;
}
