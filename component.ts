import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { isThisSecond } from 'date-fns';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {


  vehicle_list = [
    {
      image: '../../../../assets/images/placeholder.png',
      vehicle_id: '001',
      vehicle_brand: 'BMW',
      model: 'c100',
      fuel: 'Petrol',
      gear_system: 'Auto',
      seats: '5'
    },
    {
      image: '../../../../assets/images/placeholder.png',
      vehicle_id: '002',
      vehicle_brand: 'Audi',
      model: 'A5',
      fuel: 'Petrol',
      gear_system: 'Auto',
      seats: '5'
    },
    {
      image: '../../../../assets/images/placeholder.png',
      vehicle_id: '003',
      vehicle_brand: 'Toyota',
      model: 'Vezel',
      fuel: 'Petrol',
      gear_system: 'Auto',
      seats: '5'
    },
    {
      image: '../../../../assets/images/placeholder.png',
      vehicle_id: '004',
      vehicle_brand: 'Suzuki',
      model: 'weagonR',
      fuel: 'Petrol',
      gear_system: 'Auto',
      seats: '5'
    },
    {
      image: '../../../../assets/images/placeholder.png',
      vehicle_id: '005',
      vehicle_brand: 'Nissan',
      model: 'GTR',
      fuel: 'Deasal',
      gear_system: 'Auto',
      seats: '5'
    }

  ]


  createVehicle: FormGroup;

  sort_order: string = "desc";
  col_name: string;
  public timerStatus;
  ok_button_disabled: boolean = false;
  confirmResut;

  modalOptions: NgbModalOptions;

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private modalService: NgbModal
  ) {
    this.modalOptions = {
      backdrop: 'static'
    }
   }

  ngOnInit() {
    this.timerStatus = 'none';
    this.createVehicle = this.fb.group({
      vehicle_brand: ['', Validators.required],
      vehicle_model: ['', Validators.required],
      vehicle_fuel: ['', Validators.required],
      vehicle_gear: ['', Validators.required],
      vehicle_seats: ['', Validators.required]
    });
  }

  createvehicle() {
    console.log(this.createVehicle.value);
  }


  sort(col_name) {
    if (this.col_name != col_name) {
      this.sort_order = 'desc';
    }

    if (this.sort_order == 'desc') {
      this.vehicle_list.sort((a, b) => a[col_name] > b[col_name] ? 1 : a[col_name] < b[col_name] ? -1 : 0);
      this.sort_order = 'asc';
    } else {
      this.vehicle_list.sort((a, b) => a[col_name] > b[col_name] ? -1 : a[col_name] < b[col_name] ? 1 : 0);
      this.sort_order = 'desc';
    }
    this.col_name = col_name;
  }

  delete_vehicle(value){
    this.ok_button_disabled = false;
    this.modalService.open(value, this.modalOptions);

  }

  handleTimer(e, id ){
    this.ok_button_disabled = true;
    this.timerStatus = 'block';
    if ( e.action = 'done' ){

           // this.modalService.dismissAll();
      // this.timerStatus = 'none';
    }
  }

  cancel_delete_operation(){
    this.modalService.dismissAll();
    this.timerStatus = 'none';
  }






}
