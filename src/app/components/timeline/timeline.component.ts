import { Component, OnInit } from '@angular/core';
import { TwitterService } from '../../services/twitter.service';
import { Twitt } from '../../Interfaces/Twitt';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  twitts:Twitt[] = [];
  text:string;

  constructor(private service:TwitterService) {
  }

  ngOnInit() {
  }

  getTwitts() {
    this.twitts = this.service.getTwitts();
    return this.twitts;
  }

  refresh() {
    this.getTwitts();
  }
}
