import { Component, Input, OnInit, ChangeDetectionStrategy,
         trigger, state, style, transition, animate } from '@angular/core';

import { ICustomer } from '../services/interfaces';
import { TrackByService } from '../services/trackby.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
 
export class CustomersComponent implements OnInit {

  @Input() customers: ICustomer[] = [];
  
  constructor(public trackbyService: TrackByService) { }
  ngOnInit() {
  }

}


