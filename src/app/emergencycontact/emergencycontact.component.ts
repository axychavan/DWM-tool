import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-emergencycontact',
  templateUrl: './emergencycontact.component.html',
  styleUrls: ['./emergencycontact.component.css']
})
export class EmergencycontactComponent implements OnInit {

  contacts: any;

  constructor(private userService: UserService) {
    this.userService.getEmergency_contacts().subscribe((res) => {
      console.log("Emergency Contacts", res);
      this.contacts = res;
    })
  }

  ngOnInit(): void {
  }

}
