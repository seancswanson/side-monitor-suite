import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.scss']
})
export class BottomComponent implements OnInit {
  gimmeShinyUrl: string = 'https://gimmeshiny.com/?tag=zen&minutes=1&seconds=30'
  constructor() { }

  ngOnInit(): void {
    console.log(document.body.offsetWidth);
  }

}
