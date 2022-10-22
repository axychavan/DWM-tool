import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidenav',
  templateUrl: './admin-sidenav.component.html',
  styleUrls: ['./admin-sidenav.component.css']
})
export class AdminSidenavComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  gotoEmployees() {
    this.router.navigate(['employees'], { relativeTo: this.route })
  }

  gotoClients() {
    this.router.navigate(['clients'], { relativeTo: this.route })
  }

  gotoTasks() {
    this.router.navigate(['tasks'], { relativeTo: this.route })
  }

  gotoCtmap() {
    this.router.navigate(['ctmap'], { relativeTo: this.route })
  }

  ngOnInit(): void {
  }

}
