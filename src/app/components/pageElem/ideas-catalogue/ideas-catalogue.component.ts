import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-ideas-catalogue',
  templateUrl: './ideas-catalogue.component.html',
  styleUrls: ['./ideas-catalogue.component.scss']
})
export class IdeasCatalogueComponent implements OnInit {

  constructor() { }

  ngOnInit(){
    // $(document).ready(function slider(){
    //   $('.lazy').slick({
    //     lazyLoad: 'ondemand',
    //     slidesToShow: 5,
    //     slidesToScroll: 1
    //   });
    // }
  }
}
