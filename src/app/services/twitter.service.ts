import { Injectable } from '@angular/core';
import { Twitt } from '../Interfaces/Twitt';

@Injectable({
  providedIn: 'root'
})

export class TwitterService {

  twitts: Twitt[] = [
    {
      image: "https://www.hogarmania.com/archivos/201610/como-ven-los-gatos-XxXx80.jpg",
      nickname: "jacg",
      username: "@jesuscaballero",
      date: "1 ago.",
      text: "Ssit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            +"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            +" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    },
    {
      image: "https://www.hogarmania.com/archivos/201610/como-ven-los-gatos-XxXx80.jpg",
      nickname: "aruv",
      username: "@adrianruvalc",
      date: "3 ago.",
      text: "Ssit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            +"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            +" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    },
    {
      image: "https://www.hogarmania.com/archivos/201610/como-ven-los-gatos-XxXx80.jpg",
      nickname: "xaviier",
      username: "@sebastianCOE",
      date: "3 ago.",
      text: "Ssit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            +"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            +" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    },
    {
      image: "https://www.hogarmania.com/archivos/201610/como-ven-los-gatos-XxXx80.jpg",
      nickname: "cavazosAdrian",
      username: "@adriancvz",
      date: "2 ago.",
      text: "Ssit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            +"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            +" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    },
    {
      image: "https://www.hogarmania.com/archivos/201610/como-ven-los-gatos-XxXx80.jpg",
      nickname: "rubestra",
      username: "@israelcerouno",
      date: "2 ago.",
      text: "Ssit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            +"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            +" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    },
    {
      image: "https://www.hogarmania.com/archivos/201610/como-ven-los-gatos-XxXx80.jpg",
      nickname: "ghostx",
      username: "@isaaccerouno",
      date: "2 ago.",
      text: "Ssit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." 
            +"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            +" Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu"
    }
  ];

  constructor() { }

  getTwitts() {
    return this.invertArray();
  }

  invertArray() {
    let result = [];
    for(let i = this.twitts.length; i >= 1; i--){
      result.push(this.twitts[i-1]);
    }
    return result;
  }

  postTwitt(data:Twitt) {
    this.twitts.push(data);
  }
}
