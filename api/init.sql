CREATE TABLE IF NOT EXISTS guestbook_entries (
    id SERIAL PRIMARY KEY,
    author VARCHAR NOT NULL,
    message TEXT NOT NULL,
    facade_style INT NOT NULL,
    facade_color INT NOT NULL,
    accent_color INT NOT NULL,
    door_style INT NOT NULL,
    published BIT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
