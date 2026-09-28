import { Router } from '@angular/router';

import { TicketSelectionService } from './ticket-selection.service';



export class TicketListComponent {

  tickets = [

    { id: 'T-101', title: 'Email outage', priority: 'High', status: 'Open' },

    { id: 'T-102', title: 'Printer offline', priority: 'Medium', status: 'Open' }

  ];



  constructor(

    private selection: TicketSelectionService,

    private router: Router

  ) {}



  open(ticket: typeof this.tickets[number]): void {

    this.selection.selectTicket(ticket);

    this.router.navigate(['/tickets', ticket.id]);

  }

}
