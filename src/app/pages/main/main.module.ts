import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from './main.component';
import {MainRoutingModules} from './main-routing.module';
import {
  NgZorroAntdModule,
  NzDropdownMenuComponent,
  NzDropDownModule,
  NzFormModule,
  NzIconModule,
  NzLayoutModule,
  NzModalModule
} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {LeftControlComponent} from './left-control/left-control.component';
import {ListComponent} from './left-control/list/list.component';


@NgModule({
  declarations: [MainComponent, LeftControlComponent, ListComponent],
  imports: [
    CommonModule,
    MainRoutingModules,
    FormsModule,
    NgZorroAntdModule,
    NzIconModule
  ]
})
export class MainModule { }
