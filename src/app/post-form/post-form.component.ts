import { Component, Output, EventEmitter } from '@angular/core';

interface newPost {
title: string;
thought: string;
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent {
  @Output() submitted = new EventEmitter<newPost>();
  
  titleInput: string;
  thoughtInput: string;
  hideTitle: boolean;
  Input: boolean;
  previousTitle: string;

  addPost = () => {
    const newPost = {
      title: this.titleInput,
      thought: this.thoughtInput,
    };
    this.submitted.emit(newPost);
    this.thoughtInput = null;
    this.titleInput = null;
  }

  toggleSection = () => {
    this.hideTitle = !this.hideTitle;
  };
  
}

