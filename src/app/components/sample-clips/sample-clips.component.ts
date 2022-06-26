import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample-clips',
  templateUrl: './sample-clips.component.html',
  styleUrls: ['./sample-clips.component.css']
})
export class SampleClipsComponent implements OnInit {
  public sampleClips = [
    {
      title: 'title1',
      author: 'author1',
      date: 'Jun 26, 2022',
      imgUrl: '/assets/videoPicture/wirtual.webp'
    },
    {
      title: 'title2',
      author: 'author2',
      date: 'Jun 26, 2022',
      imgUrl: '/assets/videoPicture/wirtual.webp'
    },
    {
      title: 'title.',
      author: 'author3',
      date: 'Jun 26, 2022',
      imgUrl: '/assets/videoPicture/wirtual.webp'
    },
    {
      title: 'title4',
      author: 'author4',
      date: 'Jun 26, 2022',
      imgUrl: '/assets/videoPicture/wirtual.webp'
    },
    {
      title: 'title5',
      author: 'author5',
      date: 'Jun 26, 2022',
      imgUrl: '/assets/videoPicture/wirtual.webp'
    },
    {
      title: 'title6',
      author: 'author6',
      date: 'Jun 26, 2022',
      imgUrl: '/assets/videoPicture/wirtual.webp'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
