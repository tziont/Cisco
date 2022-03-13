import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
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
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
