import { Routes } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { RestaurantRegistrationComponent } from './components/restaurant-registration/restaurant-registration.component';

const appRoutes: Routes = [
  { path: 'Restaurants', 
    component: RestaurantsComponent 
  },
  {
    path: 'RestaurantRegistration',
    component: RestaurantRegistrationComponent
  },
  {
    path: 'Account',
    component: AccountsComponent
  }
];
export default appRoutes;