import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Post } from '../post';

  
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent {
  @Input() post: Post;
  // @Output() emitToParent = new EventEmitter<object>();
  @Output() delete = new EventEmitter<any>(); //null?




  // titleInput: string;
  // thoughtInput: string;
  // hideTitle: boolean;
  // item: object;
  // Input: boolean;
  // previousTitle: string;


  deletePost = function()  {
    this.delete.emit(this.post);
  }
    

}