import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {debounceTime, takeUntil} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private destroyed$: Subject<null> = new Subject();

  searchInput = new FormControl();

  @Output() searchQuery: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.searchInput.valueChanges.pipe(
      debounceTime(300),
      takeUntil(this.destroyed$)
    ).subscribe((query) => this.searchQuery.emit(query));
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }
}
