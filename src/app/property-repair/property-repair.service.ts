import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PropertyRepair } from '../interfaces/propertyRepair';

const URLs = {
  getPropertyRepairURL: "http://localhost:8080/Tecniko-1.0-SNAPSHOT/resources/admin/getPropertyRepairs"
}
@Injectable({
  providedIn: 'root'
})
export class PropertyRepairService {
  constructor(private http: HttpClient) { }
  GetPropertyRepair(): Observable<any> {
    return this.http.get<PropertyRepair[]>(URLs.getPropertyRepairURL)
 }
}
