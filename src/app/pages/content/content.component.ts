import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
	
	@Input()
	photoCover:string = "https://techwise.co.in/assets/images/services/angular2.png"
	@Input()
	contentTitle:string = "Angular is the best framework for corporations system"
	@Input()
	contentDescription:string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis saepe enim non iusto. Velit reprehenderit laboriosam hic nobis! Esse, autem qui? Incidunt ab nulla porro laborum fugit inventore sit placeat?"

	constructor() { }

	ngOnInit(): void {
	}

}
