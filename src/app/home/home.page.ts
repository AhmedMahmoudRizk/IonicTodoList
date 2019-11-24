import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { PostService } from "../post.service";
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  // lastName: string;
  // userName: string;
  taskList = [];
  posts: any;
  taskName: string
  constructor(public postService: PostService, public navCtrl: NavController, public alertCtrl: AlertController, public r: Router) {
  }

  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      // this.taskList.push(task);
      let body = { task: this.taskName }
      this.addNewTask(body)
      this.taskName = "";
    }

  }

  deleteTask(index, i) {
    console.log(index)
    this.taskList.splice(i, 1);
    this.posts.splice(i, 1)
    this.postService.deletePost(index).subscribe()
  }

  updateTask(index, i) {
    let alert = this.alertCtrl.create({
      message: 'Type in your new task to update.',
      inputs: [{ name: 'editTask', placeholder: 'Task' }],
      buttons: [{ text: 'Cancel', role: 'cancel' },
      {
        text: 'Update', handler: (data) => {
          console.log(data.editTask);
          // this.posts[i].task = data.editTask;
          let body = { task: data.editTask, id: index }
          this.postService.updatePost(index, body).subscribe(
            (sucess) => {
              console.log(sucess);
              this.posts[i]=sucess;
              // this.posts[i].task = sucess.task;
              //this.posts.splice(i, 1)
              //this.posts.push(sucess)
              console.log(this.posts[i])
            },
            (err) => {
              console.log(err);
            }
          )
          // this.posts[i].task = data.editTask
          // console.log(index)
          // this.postService.deletePost(index).subscribe(
          //   (sucess) => {
          //     this.postService.addPost(body).subscribe(
          //       (sucess) => {
          //         console.log(sucess);
          //          this.posts[i].id = sucess.id;
          //          this.posts[i].task = sucess.task;
          //         //this.posts.splice(i, 1)
          //         //this.posts.push(sucess)
          //         console.log(this.posts[i])
          //       },
          //       (err) => {
          //         console.log(err);
          //       }
          //     )
          //   },
          // )

          // this.postService.addPost(body).subscribe(
          //   (sucess) => {
          //     console.log(sucess);
          //     this.posts[i] = sucess
          //   },
          //   (err) => {
          //     console.log(err);
          //   }
          // )
        }
      }
      ]
    }).then(alert => {
      alert.present();
    });
  }

  ngOnInit() {
    this.getTasks();
    // this.postService.deletePost().subscribe()
  }

  getTasks() {
    this.postService.getPost().subscribe(
      (
        result
      ) => {
        this.posts = result;
        console.log(this.posts);
        for (let entry of this.posts) {
          this.taskList.push(entry.task);
        }
      }
    )
  }

  addNewTask(body) {
    this.postService.addPost(body).subscribe(
      (sucess) => {
        console.log(sucess);
        this.posts.push(sucess)
      },
      (err) => {
        console.log(err);
      }
    )
  }

  print() {
    // this.userName = " test";
    console.log("Hello");
    // console.log(this.lastName);
    this.r.navigate(['login']);
    // alert("zzzzz");
  }

}