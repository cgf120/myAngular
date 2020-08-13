import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd/i18n';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {AppRoutingModule} from './app-routing.module';
import {SetupModule} from './pages/setup/setup.module';
import {MainModule} from './pages/main/main.module';
import {FormsModule} from '@angular/forms';
import { NzIconModule } from 'ng-zorro-antd/icon';
import {ListService} from './services/list/list.service';
import {TodoService} from './services/todo/todo.service';

registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    NzIconModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    SetupModule,
    MainModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, ListService, TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
