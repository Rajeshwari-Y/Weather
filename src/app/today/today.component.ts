import { Component, OnInit, } from '@angular/core';
import {WeatherService} from '../weather.service';
@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.css']
})
export class TodayComponent implements OnInit {
  wea: any;
 
  constructor() { }

  ngOnInit(): void {
    //WeatherService.get
    //(35,139).subscribe(console.log);
  }

 

}
