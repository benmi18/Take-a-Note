import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { Note } from './note.model';
import { NotesStore } from './notes.store';

@Injectable({ providedIn: 'root' })
export class NotesService {

  constructor(private notesStore: NotesStore) {
  }

  // get() {
  //   return this.http.get<Note[]>('https://api.com').pipe(tap(entities => {
  //     this.notesStore.set(entities);
  //   }));
  // }

  add(note: Note): void {
    this.notesStore.add(note);
  }

  update(id, note: Partial<Note>): void {
    this.notesStore.update(id, note);
  }

  remove(id: ID): void {
    this.notesStore.remove(id);
  }
}
