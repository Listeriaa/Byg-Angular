import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <mat-toolbar color="primary">
      <span>Application Formation Angular</span>
     <ul class="menu">
       <li class="menu-item" routerLink="/home" routerLinkActive="active">Home</li>
       <li class="menu-item" routerLink="/get-started" routerLinkActive="active">Get Started</li>
       <li class="menu-item" routerLink="/blog" routerLinkActive="active">Blog</li>
     </ul>
    </mat-toolbar>
    </header>
  `,
  styles: [`
    mat-toolbar {
      display: flex;
      justify-content: space-between;
    }
    .menu {
      list-style-type: none;
      display: flex;
      padding: 0;
      margin: 0;

      .menu-item{
        padding : 0 1rem;

        &:hover {
          text-decoration : underline;
          cursor: pointer;
        }
        &.active {
          font-weight: bolder;
        }
      }
    }

  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
