import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import appRoutes from './routerConfig';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantRegistrationComponent } from './components/restaurant-registration/restaurant-registration.component';
import { AccountsComponent } from './components/accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    RestaurantRegistrationComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
