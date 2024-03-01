import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightModule } from 'ngx-highlightjs';
import { JsondataService } from '../services/jsondata.service';

export interface Student {
  en_no: number;
  name: string;
  sem: number;
  div?: number;
}
function genratecode(inputvalue: string) : string {
  let outputvalue: string = '';
  for (let i = 0; i < inputvalue.length; i++) {
    const element = inputvalue[i];
    outputvalue += `, ${element.charCodeAt(0)}`;
  }
  return outputvalue
}
function javacode(inputname: string = '') : string {
  let java: string = ` int charayy[] = { 72, 101, 108, 108, 111, 44, 32${inputname} };
  for (int i : charayy) {
      System.out.print((char) i);
 }`;
  return java;
}
function pythoncode(inputname : string) :string{
  let python : string = ` chararr = [72, 101, 108, 108, 111, 44, 32${inputname} ]
 for i in chararr:
    print(chr(i),end="")`
  return python
}
@Component({
  selector: 'app-mycompo',
  standalone: true,
  imports: [CommonModule, HighlightModule],
  templateUrl: './mycompo.component.html',
  styleUrl: './mycompo.component.scss',
  providers:[JsondataService]
})
export class MycompoComponent implements OnInit,OnChanges {
  @Input() myname: string = '';
  @Output() senddata = new EventEmitter<Student>();
  Copyed = 'Copy';
  codejava = javacode(genratecode(''));
  codepython = pythoncode(genratecode(''));
  testvar:string = "Hello from mycompo"
  constructor(private jsondata : JsondataService){
    this.testvar = jsondata.testvar
  }
  addname(inputdata: string){
    this.codejava = javacode(genratecode(inputdata));
    this.codepython = pythoncode(genratecode(inputdata));
  }

  studentlist: Student[] = [
    {
      en_no: 236458307013,
      name: 'Malav1',
      sem: 4,
      div: 3,
    },
  ];

  ishide = false;
  toggle() {
    this.ishide = !this.ishide;
    for (let i = 0; i < 127; i++) {
      console.log(`${i} = ${'M'.charCodeAt(0)}`);
    }
  }
  datatosend(student: Student) {
    this.senddata.emit(student);
  }
  copydata() {
    // navigator.clipboard.writeText(this.code);
    this.Copyed = 'Copyed';
  }
  btn(btn: HTMLElement) {
    console.log(btn.innerHTML);
  }
  ngOnInit(): void {
    console.log(this.myname);
    console.log('Hello');
    console.log(this.jsondata.getdata());
    console.log(this.jsondata);
    
  }
  hellomycompo(){
    this.jsondata.testvar= "Hello from mycompo"
    console.log(this.jsondata.testvar);
    
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log("Hello");
      
  }
}
