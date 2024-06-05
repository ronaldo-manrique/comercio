import { Component } from '@angular/core';
import { HeaderBlockComponent } from '../../ui/blocks/header-block/header-block.component';
import { HeaderContainerFacade } from './header.facade';

@Component({
  selector: 'app-header-container',
  standalone: true,
  imports: [HeaderBlockComponent],
  templateUrl: './header-container.component.html',
 
})
export class HeaderContainerComponent {

  constructor(
    private readonly facade:HeaderContainerFacade
  ) { }

  remove(){    
    this.facade.remove('token');    
   }





}
