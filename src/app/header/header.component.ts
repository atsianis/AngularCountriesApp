import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  buttonText = "About";
  @ViewChild('button' , {static:false}) navbutton: ElementRef;
  @Output() navigate = new EventEmitter<string>()
  constructor() { }
  
  ngOnInit(): void {
  }

  onChange(){
    if (this.buttonText === "About"){
      this.buttonText = "Countries";
    }else{
      this.buttonText = "About";
    }
    this.navbutton.nativeElement.innerText = this.buttonText;
    this.navigate.emit(this.buttonText);

  }

}
