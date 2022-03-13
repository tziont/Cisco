import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/Operators';
import { Device } from 'src/app/types/device';
import { Group } from 'src/app/types/group';
import { EndpointService } from 'src/app/services/end-points.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
})
export class ShellComponent implements OnInit, OnDestroy {
  private termination: Subject<null> = new Subject();
  private terminate$: Observable<null> = this.termination.asObservable();
  currentDevices: Device[];
  allData: Device[];
  europeData: Device[];
  indiaData: Device[];
  newMexicoData: Device[];
  usaData: Device[];
  groups: Group[];
  selected: string;

  constructor(private devices: EndpointService) {}

  ngOnInit(): void {
    this.devices
      .getAllData()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.allData = res;
        this.currentDevices = this.allData;
        this.selected = 'allData';
      });
    this.devices
      .getEuropeData()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.europeData = res;
      });
    this.devices
      .getIndiaData()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.indiaData = res;
      });
    this.devices
      .getNewMexicoData()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.newMexicoData = res;
      });
    this.devices
      .getUsaData()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.usaData = res;
      });
    this.devices
      .getGroups()
      .pipe(takeUntil(this.terminate$))
      .subscribe((res) => {
        this.groups = res;
      });
      
  }
  selectGroup(e: string) {
    switch (e) {
      case 'allData':
        this.selected = 'allData';
        this.currentDevices = this.allData;
        break;
      case 'europeData':
        this.selected = 'europeData';
        this.currentDevices = this.europeData;
        break;
      case 'indiaData':
        this.selected = 'indiaData';
        this.currentDevices = this.indiaData;
        break;
      case 'usaData':
        this.selected = 'usaData';
        this.currentDevices = this.usaData;
        break;
      case 'newMexicoData':
        this.selected = 'newMexicoData';
        this.currentDevices = this.newMexicoData;
        break;
      default:
        this.currentDevices = this.allData;
    }
  }

  ngOnDestroy(): void {
    this.termination.next();
    this.termination.complete();
  }
}
