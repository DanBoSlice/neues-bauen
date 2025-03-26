import { GuestbookEntryDto } from '@api/dtos/guestbook-entry.dto';
import React, { createContext, useContext, useState } from 'react';

interface GuestbookContextType {
  entries: GuestbookEntryDto[];
  loading: boolean;
  error: string | null;
  fetchEntries: () => Promise<void>;
  refetchEntries: () => Promise<void>;
}

const GuestbookContext = createContext<GuestbookContextType | undefined>(undefined);

export const GuestbookProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [entries, setEntries] = useState<GuestbookEntryDto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEntries = async () => {
    if (entries.length > 0) {
      return;
    }

    setLoading(true);
    try {
      const response = await fetch('/api/getEntries');
      if (!response.ok) {
        throw new Error(`Error fetching guestbook entries: ${response.statusText}`);
      }
      const data: GuestbookEntryDto[] = await response.json();
      setEntries(data);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  const refetchEntries = async () => {
    setEntries([]);
    await fetchEntries();
  };

  return (
    <GuestbookContext.Provider value={{ entries, loading, error, fetchEntries, refetchEntries }}>
      {children}
    </GuestbookContext.Provider>
  );
};

export const useGuestbook = () => {
  const context = useContext(GuestbookContext);
  if (!context) {
    throw new Error('useGuestbook must be used within a GuestbookProvider');
  }
  return context;
};
