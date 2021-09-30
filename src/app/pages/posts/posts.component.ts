import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  mensajes: any;

  constructor( private data: DataService) { }

  ngOnInit() {

    this.mensajes = this.data.getPost()
      /* .subscribe( (posts: any ) => {
        console.log(posts); 
        this.mensajes = posts;} ); */

  }

  escucharClick( id: number ){
    console.log('Click en:', id)
  }

}
