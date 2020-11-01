import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  userlist = [];
  modelData = {title:"",desc:"",comments:[],listIndex:"",cardIndex:""};
  closeResult: string;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {
    
  }
  public addList(event) {
    this.userlist.push({cards:[]});
  }
  public addCard(listIndex) {
    this.userlist[listIndex].cards.push({title:"Card title",desc:"",comments:[]});
  }
  public addComment(event) {
    this.modelData.comments.push({text: event.target.value});
    event.target.value = "";
  }
  public updateCard() {
    this.userlist[this.modelData.listIndex].cards[this.modelData.cardIndex].title = this.modelData.title;
    this.userlist[this.modelData.listIndex].cards[this.modelData.cardIndex].desc = this.modelData.desc;
  }
  public deleteCard() {
    this.userlist[this.modelData.listIndex].cards.splice(this.modelData.cardIndex, 1);
  }
  public deleteList(listIndex) {
    this.userlist.splice(listIndex, 1);
  }
  open(content,listIndex,cardIndex) {
    //this.modelData = {title: this.userlist[listIndex].cards[cardIndex].title,desc : this.userlist[listIndex].cards[cardIndex].desc};
    this.modelData = {title: this.userlist[listIndex].cards[cardIndex].title,desc : this.userlist[listIndex].cards[cardIndex].desc,comments : this.userlist[listIndex].cards[cardIndex].comments,listIndex:listIndex,cardIndex:cardIndex};
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
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
}
