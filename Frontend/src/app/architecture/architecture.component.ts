// architecture.component.ts
import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-architecture',
  templateUrl: './architecture.component.html',
  styleUrls: ['./architecture.component.css']
})
export class ArchitectureComponent implements OnInit {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.scrollToTop(); // Use the scrolling logic directly
  }

  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }
}
