import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import {LocalStorageService} from '../../services/local-storage.service';
import {FormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';



@NgModule({
  declarations: [SetupComponent],
    imports: [
        CommonModule,
        FormsModule,
        NgZorroAntdModule
    ],
  providers: [
    LocalStorageService
  ]
})
export class SetupModule { }
