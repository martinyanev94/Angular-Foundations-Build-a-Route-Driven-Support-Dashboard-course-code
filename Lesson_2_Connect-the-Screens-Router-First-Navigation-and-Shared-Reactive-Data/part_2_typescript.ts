import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Ticket } from './ticket';



@Injectable({ providedIn: 'root' })

export class TicketSelectionService {

  readonly selectedTicket$ = new BehaviorSubject<Ticket>({

    id: 'T-101', title: 'Email outage', priority: 'High', status: 'Open'

  });



  selectTicket(ticket: Ticket): void {

    this.selectedTicket$.next(ticket);

  }

}
