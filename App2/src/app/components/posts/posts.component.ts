import {Component, OnInit} from '@angular/core';
import {TpserviceService} from "../../services/tpservice/tpservice.service";

@Component({
    selector: 'app-posts',
    templateUrl: './posts.component.html',
    styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    fieldsTodos=['id','titre','description','user.email'];
    constructor(private tpService: TpserviceService) {
    }

    ngOnInit() {
        //Observable
        this.tpService.loadPosts().subscribe((posts) => {
            this.tpService.posts = posts;
            this.tpService.loadUsers().subscribe((users) => {
                this.tpService.users = users;
                this.matchPostsUsers();
            });
        });
    }

    matchPostsUsers() {
        for (let i in this.tpService.posts) {
            var post = this.tpService.posts[i];
            post.user = this.tpService.users.filter(function (user) {
                return user.id == post.userId;
            })[0];

            //this.findUserById(post.userId)
        }
        console.log(post.user);
        console.log(this.tpService.posts)
    }

    findUserById() {

    }
}
