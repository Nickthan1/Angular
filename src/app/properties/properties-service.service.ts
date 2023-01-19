import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Properties } from '../interfaces/properties';
const URLs = {
  getPropertiesURL: "http://localhost:8080/Tecniko-1.0-SNAPSHOT/resources/admin/getProperties"
}
@Injectable({
  providedIn: 'root'
})
export class PropertiesServiceService {
  constructor(private http: HttpClient) { }
  GetProperties(): Observable<Properties[]> {
    return this.http.get<Properties[]>(URLs.getPropertiesURL)
  }
}
