import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-ctmap',
  templateUrl: './ctmap.component.html',
  styleUrls: ['./ctmap.component.css']
})
export class CtmapComponent implements OnInit {

  ctmap: any;
  associate_data: any = {};
  clients: any;
  tasks: any;

  constructor(private adminService: AdminService, private toast: NgToastService) {

    this.adminService.getCtmap().subscribe((res) => {
      this.ctmap = res;
      console.log("CTMap response", this.ctmap);
    })

    this.adminService.getClients().subscribe((res) => {
      this.clients = res;
      console.log("Clients response", this.clients);
    })

    this.adminService.getTasks().subscribe((res) => {
      this.tasks = res;
      console.log("Tasks response", this.tasks);
    })
  }

  associate_ctmap() {
    console.log(this.associate_data.cl_name)
    console.log(this.associate_data.task)
    this.adminService.associateCtmap(this.associate_data).
      subscribe(
        res => {
          console.log("Client-Task associated", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: 'Client-Task associated successfully', duration: '3000' });
  }

  delete_Ctmap(item: { mapid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.adminService.deleteCtmap(item.mapid)
        .subscribe(response => {
          this.ctmap = this.ctmap.filter((item: { id: any; }) => item.id !== item.id);
        });
      window.location.reload();
    }
  }

  ngOnInit(): void { }
}
