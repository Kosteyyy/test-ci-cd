import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-cicd';
  new_title = 'camel-case testing';
  oldTitle = "double-quotes"

  ngOnInit(): void {
    console.log("init component")
  }
}
