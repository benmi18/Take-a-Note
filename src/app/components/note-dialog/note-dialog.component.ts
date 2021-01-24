import {Component, OnInit} from '@angular/core';
import {NbDialogRef} from '@nebular/theme';
import {Note} from '../../data/interfaces/note';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-note-dialog',
  templateUrl: './note-dialog.component.html',
  styleUrls: ['./note-dialog.component.scss']
})
export class NoteDialogComponent implements OnInit {
  note: Note = {body: '', title: ''};
  noteForm: FormGroup;

  constructor(public ref: NbDialogRef<NoteDialogComponent>, private fb: FormBuilder) {
  }

  submit(): void {
    const {title, body} = this.noteForm.value;
    this.ref.close({
      ...this.note,
      title,
      body
    });
  }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: [this.note?.title, Validators.required],
      body: [this.note?.body, Validators.required]
    });
  }
}
