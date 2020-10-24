import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vehicle-view',
  templateUrl: './vehicle-view.component.html',
  styleUrls: ['./vehicle-view.component.scss']
})
export class VehicleViewComponent implements OnInit {

  services_list_vehicle = [
    {
      service_id: '001',
      service_name: 'Service 1'
    },
    {
      service_id: '002',
      service_name: 'Service 2'
    },
    {
      service_id: '003',
      service_name: 'Service 3'
    },
    {
      service_id: '004',
      service_name: 'Service 4'
    },
    {
      service_id: '005',
      service_name: 'Service 5'
    }
  ]


  sort_order: string = "desc";
  col_name: string

  constructor() { }

  ngOnInit(): void {
  }

  sort(col_name) {
    if (this.col_name != col_name) {
      this.sort_order = 'desc';
    }

    if (this.sort_order == 'desc') {
      this.services_list_vehicle.sort((a, b) => a[col_name] > b[col_name] ? 1 : a[col_name] < b[col_name] ? -1 : 0);
      this.sort_order = 'asc';
    } else {
      this.services_list_vehicle.sort((a, b) => a[col_name] > b[col_name] ? -1 : a[col_name] < b[col_name] ? 1 : 0);
      this.sort_order = 'desc';
    }
    this.col_name = col_name;
  }

}
