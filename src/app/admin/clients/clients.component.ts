import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from 'src/app/services/admin.service';

import { ngxCsv } from 'ngx-csv/ngx-csv';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients: any;
  addClient: any = {};

  constructor(
    private adminService: AdminService,
    private toast: NgToastService
  ) {

    this.adminService.getClients().subscribe((res) => {
      this.clients = res;
      console.log("Clients", this.clients);
    })
  }

  add_client() {
    console.log("Client added")
    console.log(this.addClient.cl_name)
    console.log(this.addClient.location)
    this.adminService.addClient(this.addClient).
      subscribe(
        res => {
          console.log("Client added", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: 'Client added successfully', duration: '3000' });
  }

  update_client() {
    console.log("Client details updated")

    this.toast.success({ detail: "Success", summary: 'Client updated successfully', duration: '3000' });
  }

  delete_Client(item: { clientid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.adminService.deleteClient(item.clientid)
        .subscribe(response => {
          this.clients = this.clients.filter((item: { id: any; }) => item.id !== item.id);
        });
      window.location.reload();
    }
  }

  clients_csv() {
    var options = {
      fieldSeparator: ',',
      quoteStrings: '"',
      decimalseparator: '.',
      showLabels: true,
      showTitle: true,
      title: 'List of clients',
      useBom: true,
      headers: ["Client_ID", "Name", "Location"],
      eol: '\n'
    };
    new ngxCsv(this.clients, "clients", options);
  }

  ngOnInit(): void { }
}
