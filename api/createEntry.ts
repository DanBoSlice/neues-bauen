import { VercelRequest, VercelResponse } from '@vercel/node';
import { CreateEntryDto } from './dtos/create-entry.dto';
import { neon } from '@neondatabase/serverless';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = neon(process.env.DATABASE_URL!);

  try {
    const dto: CreateEntryDto = req.body;

    if (!dto.name || !dto.message) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    const result = await sql`
      INSERT INTO guestbook_entries (author, message, facade_style, facade_color, accent_color)
      VALUES (${dto.name}, ${dto.message}, ${dto.houseStyle.facadeStyle}, ${dto.houseStyle.facadeColor}, ${dto.houseStyle.accentColor})
      RETURNING author, message, created_at
    `;

    const createdEntry = result[0];

    return res.status(201).json({
      id: createdEntry.id,
      author: createdEntry.author,
      message: createdEntry.message,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
