import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  data: any = {};

  onSubmit() {
    alert(JSON.stringify(this.data));
  }
  constructor() { }

  ngOnInit() {
  }

}
