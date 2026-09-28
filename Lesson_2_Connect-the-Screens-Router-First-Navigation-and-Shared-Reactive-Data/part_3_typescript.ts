import { Routes } from '@angular/router';

import { TicketListComponent } from './ticket-list.component';

import { TicketDetailComponent } from './ticket-detail.component';



export const routes: Routes = [

  { path: 'tickets', component: TicketListComponent },

  { path: 'tickets/:id', component: TicketDetailComponent },

  { path: '', pathMatch: 'full', redirectTo: 'tickets' }

];
