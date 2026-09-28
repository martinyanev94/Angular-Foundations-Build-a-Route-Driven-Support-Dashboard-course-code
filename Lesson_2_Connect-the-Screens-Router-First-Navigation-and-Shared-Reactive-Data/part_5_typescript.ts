import { TicketSelectionService } from './ticket-selection.service';



export class TicketDetailComponent {

  selectedTicket?: Ticket;



  constructor(private selection: TicketSelectionService) {

    this.selection.selectedTicket$.subscribe(ticket => {

      this.selectedTicket = ticket;

    });

  }

}
