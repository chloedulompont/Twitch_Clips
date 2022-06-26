import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-clip-article',
  templateUrl: './clip-article.component.html',
  styleUrls: ['./clip-article.component.css']
})
export class ClipArticleComponent implements OnInit {
  @Input() title: string = "Title";

  @Input() author: string = 'Author';

  @Input() date: string = "Jun 26, 2022";

  @Input() imgUrl: string = "/assets/videoPicture/wirtual.webp";

  constructor() { }

  ngOnInit(): void {
  }

}
