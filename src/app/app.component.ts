import { Component } from '@angular/core';
import { ThirdComponent } from './third/third.component';
import { FourComponent } from './four/four.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	
	  f=new FourComponent();
	 t=new ThirdComponent();
	
	res=this.f.sub()+this.t.sum();
	

	
}
