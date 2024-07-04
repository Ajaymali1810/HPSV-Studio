import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.scrollToTop();
  }

  scrollToTop() {
    this.document.body.scrollTop = 0;
    this.document.documentElement.scrollTop = 0;
  }

  showArchitecture() {
    this.router.navigate(['architecture']);
  }
}
