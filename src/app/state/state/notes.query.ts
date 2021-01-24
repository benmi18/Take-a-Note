import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { NotesStore, NotesState } from './notes.store';

@Injectable({ providedIn: 'root' })
export class NotesQuery extends QueryEntity<NotesState> {
  selectNotes$ = this.select(state => Object.values(state.entities));
  selectSingleNote$ = (id: string) => this.select(state => state.entities[id]);

  constructor(protected store: NotesStore) {
    super(store);
  }
}
