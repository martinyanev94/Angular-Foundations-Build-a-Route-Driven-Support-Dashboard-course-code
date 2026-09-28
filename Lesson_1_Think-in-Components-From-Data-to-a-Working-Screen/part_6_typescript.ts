// ticket-summary.component.ts excerpt

import { Component } from '@angular/core';



@Component({

  selector: 'app-ticket-summary',

  standalone: true,

  imports: [],

  templateUrl: './ticket-summary.component.html',

})

export class TicketSummaryComponent {

  ticket = {

    title: 'Printer offline',

    priority: 'High',

    status: 'Open',

  };

}
