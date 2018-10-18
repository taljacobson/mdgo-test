import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AccidentService } from './accident.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home.component';
import { MdaTableComponent } from './mda-table/mda-table.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SingleAccidentComponent } from './single-accident/single-accident.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleAccidentComponent,
    HeaderBarComponent,
    SideMenuComponent,
    UserInfoComponent,
    MdaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: '<-- AGM_KEY -->'
    })
  ],
  providers: [AccidentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
