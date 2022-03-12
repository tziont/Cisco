import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShellComponent } from './components/shell/shell.component';
import { DevicesGroupsComponent } from './components/devices-groups/devices-groups.component';
import { DevicesComponent } from './components/devices/devices.component';

@NgModule({
  declarations: [
    AppComponent,
    ShellComponent,
    DevicesGroupsComponent,
    DevicesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
