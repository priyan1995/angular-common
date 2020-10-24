import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vehicle-edit',
  templateUrl: './vehicle-edit.component.html',
  styleUrls: ['./vehicle-edit.component.scss']
})
export class VehicleEditComponent implements OnInit {

  editVehicle: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.editVehicle = this.fb.group({
      vehicle_brand: ['', Validators.required],
      vehicle_model: ['', Validators.required],
      vehicle_fuel_type: ['', Validators.required],
      vehicle_gear_system: ['', Validators.required],
      vehicle_seats: ['', Validators.required]

    })
  }

  editvehicle() {
    console.log(this.editVehicle.value);
  }

}
