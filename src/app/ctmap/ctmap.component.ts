import { Component, OnInit } from '@angular/core';
import { AdminService } from '../services/admin.service';

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

  constructor(private adminService: AdminService) {

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
    /* console.log(this.associate_data.ctname);
    console.log(this.associate_data.ctdescription);    
    this.adminService.postctmap(this.associate_data).subscribe((res) => {
      console.log("association response", res);
    }) */
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
