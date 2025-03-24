import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  websiteTitle = "Ella H";

  constructor(private scroller: ViewportScroller) {}

  // ngOnInit() {
  //   this.router.navigate(["/"]);
  // }

  public navigateToSection(sectionId: string) {
    this.scroller.scrollToAnchor(sectionId);
  }
}
