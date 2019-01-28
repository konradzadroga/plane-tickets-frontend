import { AddFlightComponent } from './add-flight/add-flight.component';
import { PlanesComponent } from './planes/planes.component';
import { TicketComponent } from './ticket/ticket.component';
import { LoginSecurityComponent } from './login-security/login.security.component';
import { RegisterSecurityComponent } from './register-security/register.security.component';
import { ProfilEditComponent } from './profil-edit/profil-edit.component';
import { FlightSearchResultComponent } from './flight-search-result/flight-search-result.component';
import { PaymentRealisedComponent } from './payment-realised/payment-realised.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { GuestViewPlacesComponent } from './guest-view-places/guest-view-places.component';
import { BuyingFormComponent } from './buying-form/buying-form.component';
import { ChoosePlaceComponent } from './choose-place/choose-place.component';
import { FlightSearchingComponent } from './flight-searching/flight-searching.component';
import { AppComponent } from './app.component';
import { ConnectionsComponent } from './connections/connections.component';
import { FlightsComponent } from './flights/flights.component';
import { UsersComponent } from './users/users.component';
import { AdminComponent } from './admin/admin.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilComponent } from './profil/profil.component';
import { PaymentComponent } from './payment/payment.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },
  {
  path: 'search',
  component: FlightSearchingComponent,
  children: [
    {
      path: 'results',
      component: FlightSearchResultComponent
    }
  ]
},
{
  path: 'paymentrealised',
  component: PaymentRealisedComponent
},
{
  path: 'payment',
  component: PaymentComponent
},
{
  path: 'insurance',
  component: InsuranceComponent
},
{
  path: 'guestview',
  component: GuestViewPlacesComponent
},
{
  path: 'chooseplace',
  component: ChoosePlaceComponent
},
{
  path: 'buyingform',
  component: BuyingFormComponent
},
{
  path: 'profil',
  component: ProfilComponent,
  children: [
    {
      path: 'editprofil',
      component: ProfilEditComponent
    },
    {
      path: 'showtickets',
      component: TicketsComponent,
    },
    {
      path: 'showticket',
      component: TicketComponent
    },
  ]
},
{

  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: 'users',
      component: UsersComponent
    },
    {
      path: 'flights',
      component: FlightsComponent
    },
    {
      path: 'connections',
      component: ConnectionsComponent
    },
    {
      path: 'planes',
      component: PlanesComponent
    },
    {
      path: 'addflight',
      component: AddFlightComponent
    }
  ]
  },
  {
    path: 'auth/login',
    component: LoginSecurityComponent
  },
  {
    path: 'signup',
    component: RegisterSecurityComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
