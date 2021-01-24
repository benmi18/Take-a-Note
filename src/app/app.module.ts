import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { NoteCardComponent } from './components/note-card/note-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbInputModule,
  NbFormFieldModule,
  NbIconModule,
  NbButtonModule, NbCardModule, NbDialogModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NoteDialogComponent } from './components/note-dialog/note-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { environment } from '../environments/environment';
import {persistState} from '@datorama/akita';

const storage = persistState();

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchBoxComponent,
    NoteCardComponent,
    NoteDialogComponent,
    ConfirmDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({name: 'dark'}),
    NbDialogModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    AppRoutingModule,
    NbFormFieldModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    NbCardModule,
    FormsModule,
    ReactiveFormsModule,
    environment.production ? [] :  AkitaNgDevtools.forRoot()
  ],
  providers: [{ provide: 'persistStorage', useValue: storage }],
  bootstrap: [AppComponent]
})
export class AppModule { }
