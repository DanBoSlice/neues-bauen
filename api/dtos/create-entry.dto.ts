import { GuestbookHouseStyleDto } from '@api/dtos/guestbook-house-style.dto';

export interface CreateEntryDto {
  name: string;
  message: string;
  houseStyle: GuestbookHouseStyleDto;
}
