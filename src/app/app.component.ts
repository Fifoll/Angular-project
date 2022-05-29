import { Component, ElementRef,  ViewChild, AfterViewInit} from '@angular/core';
import countries from './assets/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = "Projekt wyszukiwarka"
  @ViewChild('userInput') someInput!: ElementRef;
  search(){
    const url = 'https://www.google.com/search?q=' + this.someInput.nativeElement.value
    if(this.someInput.nativeElement.value != ''){
      window.open(url)
    }
    else{
      alert('Przecież nic nie napisałeś!')
    }  
  }
  ngAfterViewInit() {
    this.someInput.nativeElement.value = '';
  }

  
  changeClass(){
    const searchElem = document.querySelector(".search")
    const input = document.querySelector('input[type="text"]')
    const btnDelete = document.querySelector('.btn.delete')
    const btnFind = document.querySelector('.btn.find')
    const btnRandom = document.querySelector('.btn.random')
    const phrases = document.querySelector('.phrases')


    searchElem?.classList.add("active")
    input?.classList.add("active")
    btnDelete?.classList.add("active")
    btnFind?.classList.add("active")
    btnRandom?.classList.add("active")
    phrases?.classList.add("active")

    const str = "Saturday night plans";
    const res = str.startsWith("Sat");
    console.log(res);
  }
  

countryList:{name:String}[]=countries;



}









