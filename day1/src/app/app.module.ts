import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { LocationComponent } from './location/location.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import {MatCardModule} from '@angular/material/card';
import { UserComponent } from './home/user/user.component';
import { UserInfoComponent } from './home/user-info/user-info.component';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { TransformPipe } from './home/transform.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutUsComponent,
    LocationComponent,
    NoPageFoundComponent,
    UserComponent,
    UserInfoComponent,
    TransformPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
