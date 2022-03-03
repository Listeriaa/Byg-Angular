import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header>
    <mat-toolbar color="primary">
      <span>Application Formation Angular</span>
     <ul class="menu">
       <li class="menu-item">Lien 1</li>
       <li class="menu-item">Lien 2</li>
       <li class="menu-item">Lien 3</li>
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
      }
    }

  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
