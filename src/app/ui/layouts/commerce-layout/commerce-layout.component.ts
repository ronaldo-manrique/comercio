import { Component } from '@angular/core';
import { HeaderContainerComponent } from '../../../container/header-container/header-container.component';
import { FooterContainerComponent } from '../../../container/footer-container/footer-container.component';

@Component({
  selector: 'app-commerce-layout',
  standalone: true,
  imports: [HeaderContainerComponent,FooterContainerComponent],
  templateUrl: './commerce-layout.component.html',
  styleUrl: './commerce-layout.component.css'
})
export class CommerceLayoutComponent {

}
