import { VercelRequest, VercelResponse } from '@vercel/node';
import { GuestbookEntryDto } from './dtos/guestbook-entry.dto';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const entries: GuestbookEntryDto[] = [
    {
      id: '1',
      author: 'Daniel',
      message: 'Great website! Lorem ipsum dolor sit amet. Lorem ipsum. Dolor sit amet consetetur.',
    },
    {
      id: '2',
      author: 'Danbos',
      message: 'Nice website!',
    },
    {
      id: '3',
      author: 'Dan Bao',
      message: 'Great website!',
    },
    {
      id: '4',
      author: 'Daniel',
      message: 'Great website! Lorem ipsum dolor sit amet.',
    },
  ];

  res.json(entries);
}
