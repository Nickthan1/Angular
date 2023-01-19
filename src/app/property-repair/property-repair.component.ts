import { PropertyRepairService } from './property-repair.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PropertyRepair } from '../interfaces/propertyRepair';

@Component({
  selector: 'app-property-repair',
  templateUrl: './property-repair.component.html',
  styleUrls: ['./property-repair.component.scss']
})
export class PropertyRepairComponent {
  propertyRepairListData: Observable<PropertyRepair[]> = new Observable();
  constructor(private PropertyRepairService: PropertyRepairService) { }
  ngOnInit(): void {
    console.log(this.propertyRepairListData);
    this.propertyRepairListData = this.PropertyRepairService.GetPropertyRepair();
  }
}
