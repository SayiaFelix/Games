import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote-class/quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quote:Quote | any;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {

    interface ApiResponse{
      author: string
      quote : string
    }

    this.http.get<ApiResponse>("http://quotes.stormconsultancy.co.uk/random.json").subscribe((data: { author: string; quote: string; })=>{
      this.quote = new Quote(data.author, data.quote)
    },err=>{
      this.quote = new Quote("Winston Churchill","Never never give up!")


    }
    
    )


  }

}
