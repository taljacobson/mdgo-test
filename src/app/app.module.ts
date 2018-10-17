import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingleAccidentComponent } from './single-accident/single-accident.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { UserInfoComponent } from './user-info/user-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleAccidentComponent,
    HeaderBarComponent,
    SideMenuComponent,
    UserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_KEY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
