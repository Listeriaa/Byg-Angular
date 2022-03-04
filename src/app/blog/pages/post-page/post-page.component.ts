import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.scss']
})
export class PostPageComponent implements OnInit {

  id!: number;

  constructor(route : ActivatedRoute) {

    //pour récupérer les paramètres de l'url
    this.id = Number(route.snapshot.paramMap.get('id'));

   }

  ngOnInit(): void {
    console.log(this.id)
  }

}
