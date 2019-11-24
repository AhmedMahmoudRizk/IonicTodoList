import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { UserService } from "../user.service";
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  signupForm: any;
  users: any;
  usern: string;
  pass: string;
  constructor(public userService: UserService, public navCtrl: NavController, public r: Router) { }


  ngOnInit() {
    // this.signupForm = this.formBuilder.group({
    //   email: ['', Validators.compose([Validators.required])],
    //   password: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    //   retype: ['', Validators.compose([Validators.minLength(6), Validators.required])],
    //   firstName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
    //   lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]
    // });
    this.userService.getUsers().subscribe(
      (
        result
      ) => {
        this.users = result;
      })
  }
  signIn() {
    console.log(this.users)
    for (let entry of this.users) {
      console.log(entry);
      if (entry.name == this.usern)
        this.r.navigate(['file-upload']);
    }


  }




}
