import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Device } from 'src/app/types/device';
import { Group } from 'src/app/types/group';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {
  @Output() groupEvent = new EventEmitter<string>();
  @Input() groups: Group[];
  @Input() selected:string;

  constructor() { }

  ngOnInit(): void {
  }
  selectGroup(groupUrl:string){
    this.groupEvent.emit(groupUrl);
  }
}
