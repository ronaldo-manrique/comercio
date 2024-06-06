import { Component, Input, OnInit } from '@angular/core';
import { ICopieModel } from '../../../core/model/ICopiesModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-copie-element',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './copie-element.component.html',
  styleUrl: './copie-element.component.css'
})
export class CopieElementComponent implements OnInit{
 
 
  @Input() copie: ICopieModel;

  ngOnInit(): void {
    console.log('CopieElementComponent');
  }


}
