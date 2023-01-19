import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Properties } from '../interfaces/properties';
import { PropertiesServiceService } from './properties-service.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent {
  propertiesListData: Observable<Properties[]> = new Observable();
  constructor(private PropertiesService: PropertiesServiceService) { }
  ngOnInit(): void {
    this.propertiesListData = this.PropertiesService.GetProperties();
 }
}
