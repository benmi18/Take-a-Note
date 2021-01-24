import { guid } from '@datorama/akita';

export interface Note {
  id: string;
  title: string;
  body: string;
}

export function createNote(title: string, body: string): Note {
  return {
    id: guid(),
    title,
    body
  } as Note;
}
