import { VercelRequest, VercelResponse } from '@vercel/node';
import { GuestbookEntryDto } from './dtos/guestbook-entry.dto';
import { neon } from '@neondatabase/serverless';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = neon(process.env.DATABASE_URL!);

  const entries: GuestbookEntryDto[] = (await sql`SELECT * FROM guestbook_entries ORDER BY created_at DESC`).map(data => ({
    id: data.id,
    author: data.author,
    message: data.message,
  }));

  res.json(entries);
}
