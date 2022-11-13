import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent implements OnInit {

  contacts: any;

  constructor(private userService: UserService) { 
    this.userService.getEmergency().subscribe((res) => {
      this.contacts = res;
      console.log("Emergency Contacts", this.contacts);
    })
  }

  ngOnInit(): void { }
}
