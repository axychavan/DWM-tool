import { Component, OnInit } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: any;
  addTask: any = {};

  constructor(
    private adminService: AdminService,
    private toast: NgToastService
  ) {

    this.adminService.getTasks().subscribe((res) => {
      this.tasks = res;
      console.log("Tasks", this.tasks);
    })
  }

  add_task() {
    console.log("Task added")
    console.log(this.addTask.password)
    this.adminService.addTask(this.addTask).
      subscribe(
        res => {
          console.warn("Task added", res);
          window.location.reload();
        })
    this.toast.success({ detail: "Success", summary: 'Task added successfully', duration: '3000' });
  }

  update_task() {
    console.log("Task details updated")

    this.toast.success({ detail: "Success", summary: 'Task updated successfully', duration: '3000' });
  }

  delete_Task(item: { taskid: string; }) {
    if (confirm('Are you sure you want to delete ?')) {
      this.adminService.deleteTask(item.taskid)
        .subscribe(response => {
          this.tasks = this.tasks.filter((item: { id: any; }) => item.id !== item.id);
        });
      window.location.reload();
    }
  }

  ngOnInit(): void { }
}
