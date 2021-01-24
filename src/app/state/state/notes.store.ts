import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Note } from './note.model';

export interface NotesState extends EntityState<Note> {
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'notes' })
export class NotesStore extends EntityStore<NotesState, Note> {
  constructor() {
    super();
  }
}

