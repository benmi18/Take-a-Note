import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Note} from '../../state/state/note.model';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent {
  @Input() note: Note;
  @Output() removeNote: EventEmitter<Note> = new EventEmitter();
  @Output() openNote: EventEmitter<Note> = new EventEmitter();
}
