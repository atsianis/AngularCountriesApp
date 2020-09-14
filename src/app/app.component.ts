import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.scss']
})
export class AppComponent {
  featureSelected = "Countries";
  title = 'myFirstAngApp';

  onNavigate(input: string){
    if (input === "Countries"){
      this.featureSelected = "About";
    }else{
      this.featureSelected = "Countries";
    }
    
  }
}
