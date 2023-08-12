import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { LocationComponent } from './location/location.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { UserInfoComponent } from './home/user-info/user-info.component';

const routes: Routes = [
  { path: "", pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: UserInfoComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'location', component: LocationComponent },
  { path: 'userInfo', component: UserInfoComponent },
  { path: '**', component: NoPageFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
