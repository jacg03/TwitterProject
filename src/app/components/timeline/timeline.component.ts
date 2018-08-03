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
    this.getTwitts();
  }

  getTwitts() {
    this.twitts = this.service.getTwitts();
  }

  postTwitt() {
    let data:Twitt;
    data.date = "today."
    data.image = "https://scontent.fntr4-1.fna.fbcdn.net/v/t1.0-9/23844474_1733973696635090_7460941906611218652_n.jpg?_nc_cat=0&oh=08d05854c205d00f10b61ff3cea5b06d&oe=5BCD242E";
    data.nickname ="jacg";
    data.username = "jesuscaballero";
    data.text = this.text;

    this.getTwitts();
  }
}
