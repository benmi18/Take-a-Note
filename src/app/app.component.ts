import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbDialogService} from '@nebular/theme';
import {NoteDialogComponent} from './components/note-dialog/note-dialog.component';
import {map, takeUntil} from 'rxjs/operators';
import {Observable, Subject} from 'rxjs';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {NotesQuery} from './state/state/notes.query';
import {createNote, Note} from './state/state/note.model';
import {NotesService} from './state/state/notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<null> = new Subject();

  notes$: Observable<Note[]>;

  constructor(private dialogService: NbDialogService, private notesQuery: NotesQuery, private notesService: NotesService) {
  }

  onOpenDialog(note?: Note): void {
    this.dialogService.open(NoteDialogComponent, {context: {
        note
    }}).onClose.pipe(takeUntil(this.destroyed$)).subscribe((noteData: Note | undefined) => {
      if (noteData) {
        const {title, body, id} = noteData;
        if (id) {
          this.notesService.update(id, {title, body});
        } else {
          this.notesService.add(createNote(title, body));
        }
      }
    });
  }

  onRemoveNote(note: Note): void {
    this.dialogService.open(ConfirmDialogComponent).onClose.pipe(takeUntil(this.destroyed$)).subscribe((deleteNote) => {
      if (deleteNote) {
        this.notesService.remove(note.id);
      }
    });
  }

  onSearch(query: string): void {
    this.notes$ = this.notesQuery.selectNotes$.pipe(
      map(notes => {
        return notes.filter(note => note.title.includes(query) || note.body.includes(query));
      })
    );
  }

  ngOnInit(): void {
    this.notes$ = this.notesQuery.selectNotes$;
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
