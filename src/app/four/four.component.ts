import { Component} from '@angular/core';
import { SecondComponent } from '../second/second.component';
 
@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent extends SecondComponent {

	sub()
	{
		return(this.geta()-this.getb());
	}

}
