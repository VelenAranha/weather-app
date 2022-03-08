import { HttpClient } from '@angular/common/http'
import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { FormControl } from '@angular/forms'
import { debounceTime } from 'rxjs'
import { WeatherService } from 'src/app/weather.service'

@Component({
  selector: 'rs-header',
  templateUrl: './rs-header.component.html',
  styleUrls: ['./rs-header.component.scss'],
})
export class RsHeaderComponent implements OnInit {
  title = 'weather-report'

  searchFC = new FormControl('Udupi')

  @Output() searchChange = new EventEmitter<string>()

  searchChange$ = this.searchFC.valueChanges.pipe(debounceTime(600))

  ngOnInit(): void {
    this.searchChange.emit(this.searchFC.value)

    this.searchChange$.subscribe((value) => {
      this.searchChange.emit(value)
    })
  }
}
