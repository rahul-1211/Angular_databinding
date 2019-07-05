import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { Test1Component } from './scenario2/s2module/test1/test1.component';
import { S1moduleModule } from './scenario1/s1module/s1module.module';
import { S2moduleModule } from './scenario2/s2module/s2module.module';
import { S3moduleModule } from './scenario3/s3module/s3module.module';
import { S4moduleModule } from './scenario4/s4module/s4module.module';
import { S5moduleModule } from './scenario5/s5module/s5module.module';
import { S6moduleModule } from './scenario6/s6module/s6module.module';
import { FirstService } from './scenario7/s7module/first.service';
import { S7moduleModule } from './scenario7/s7module/s7module.module';


@NgModule({
  declarations: [
    AppComponent,
    
    
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    S1moduleModule,S2moduleModule,S3moduleModule, S4moduleModule, S5moduleModule, S6moduleModule, S7moduleModule
  ],
  providers: [FirstService],
  bootstrap: [AppComponent]
})
export class AppModule { }
