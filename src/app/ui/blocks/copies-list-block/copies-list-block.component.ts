import { Component, Input, OnInit } from '@angular/core';
import { ICopieModel } from '../../../core/model/ICopiesModel';
import { CommonModule, JsonPipe, KeyValuePipe } from '@angular/common';
import { CopieElementComponent } from '../../elements/copie-element/copie-element.component';

@Component({
  selector: 'app-copies-list-block',
  standalone: true,
  imports: [CopieElementComponent,CommonModule, JsonPipe, KeyValuePipe],
  templateUrl: './copies-list-block.component.html',
  styleUrl: './copies-list-block.component.css'
})
export class CopiesListBlockComponent implements OnInit{
  

  @Input() copies: ICopieModel[];

  ngOnInit(): void {
    console.log('lista de copias:'+this.copies);
  }


}
