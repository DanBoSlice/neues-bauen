import { VercelRequest, VercelResponse } from '@vercel/node';
import { neon } from '@neondatabase/serverless';
import { CreateEntryModel } from './models/create-entry.model';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  const sql = neon(process.env.DATABASE_URL!);

  const model = new CreateEntryModel(req.body);

  if (!model.isValid()) {
    return res.status(400).json({ error: 'Invalid input data' });
  }

  try {
    const result = await sql`
      INSERT INTO guestbook_entries (
        author,
        message, 
        facade_style, 
        facade_color, 
        accent_color, 
        door_style, 
        published
      )
      VALUES (
        ${model.name}, 
        ${model.message}, 
        ${model.houseStyle.facadeStyle}, 
        ${model.houseStyle.facadeColor}, 
        ${model.houseStyle.accentColor},
        ${model.houseStyle.doorStyle},
        '1'
      )
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
