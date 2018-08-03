import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Twitt } from '../../Interfaces/Twitt';
import { TwitterService } from '../../services/twitter.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Output() modaltwitt = new EventEmitter();
  text:string;

  ngOnInit() {
  }
  
  closeResult: string;
  title = 'app';

  constructor(private modalService: NgbModal, private sevice:TwitterService) {}

  open(content) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.postTwitt();
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  postTwitt() {
    let data:Twitt = {        
      date: "today.",
      image: "https://scontent.fntr4-1.fna.fbcdn.net/v/t1.0-9/23844474_1733973696635090_7460941906611218652_n.jpg?_nc_cat=0&oh=08d05854c205d00f10b61ff3cea5b06d&oe=5BCD242E",
      nickname:"jacg",
      username: "jesuscaballero",
      text: this.text
    };
    this.sevice.postTwitt(data);
    this.text ="";
  }
}
