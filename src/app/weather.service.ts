import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url = 'https://api.openweathermap.org/data/2.5/weather';
  apiKey ='';

  constructor(private http: HttpClient) { }
  
  getDataByCords(lat: any, long : any){
    let params = new HttpParams()
    .set('lat', lat)
    .set('long', long)
    .set('units', 'Imperial')
    .set('appid',this.apiKey)

    return this.http.get(this.url,{params});
    

  }
}

