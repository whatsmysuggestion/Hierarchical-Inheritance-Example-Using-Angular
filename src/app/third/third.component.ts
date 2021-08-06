import { Component, OnInit } from '@angular/core';
import { SecondComponent } from '../second/second.component';
@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent extends SecondComponent {

	sum()
	{
		return(this.geta()+this.getb());
	}

}
