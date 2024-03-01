import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MycompoComponent } from './mycompo/mycompo.component';
import { JsondataService } from './services/jsondata.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MycompoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers:[JsondataService]
})
export class AppComponent {
  devloper:string = "Malav"
  testvar:string = "Hello from app"
  constructor(private serdata : JsondataService,){
    serdata.getjsondata().subscribe(data=>{
      console.log(data);
      
    })
    
    this.testvar = serdata.testvar;
  }
  getdata(data:any){
    console.log(data);
    
  }
  helloapp(){
    this.serdata.testvar = "Hello from app"
    console.log(this.serdata.testvar);
    
  }
}
