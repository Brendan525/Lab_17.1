import { Component, } from '@angular/core';

interface Post {
  title: string,
  thought: string
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  posts: Post[] = [ //previousTitles
    {title: 'Dog', thought: 'Where am I?'},
    {title: 'Cat', thought: 'Who is this?'},
    {title: 'Pig', thought: 'What am I doing?'},
    {title: 'Cow', thought: 'Who are you'},
    {title: 'Whale', thought: 'Why are you here?'},
  ];

  onSubmit(eventArgs){
    this.posts.push(eventArgs);
  }

  onDelete = (event) => {
    const index = this.posts.indexOf(event);
    this.posts.splice(index, 1);
  }

}
