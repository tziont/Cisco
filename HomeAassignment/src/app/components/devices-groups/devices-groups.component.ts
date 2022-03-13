import { Component, OnInit, Input } from '@angular/core';
import { Device } from 'src/app/types/device';

@Component({
  selector: 'app-devices-groups',
  templateUrl: './devices-groups.component.html',
  styleUrls: ['./devices-groups.component.scss']
})
export class DevicesGroupsComponent implements OnInit {
  @Input()
  devices:Device[];
  layout:string = 'row'
  constructor() { }

  ngOnInit(): void {
  }

  toggleLayout(layout:string){
 this.layout = layout;
  }

}
