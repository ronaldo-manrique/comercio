import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { StorageService } from '../../../core/services/generals/storage.service';

@Component({
  selector: 'app-header-block',
  standalone: true,
  imports: [],
  templateUrl: './header-block.component.html',
  styleUrl: './header-block.component.css'
})
export class HeaderBlockComponent implements OnInit{
  
  
 
   username: string = '';
   constructor(private readonly storageService: StorageService) {} 

  

  ngOnInit(): void {
    
    const usernameFromToken = this.storageService.getUsernameFromToken();
    this.username = usernameFromToken !== null ? usernameFromToken : '';
    this.username = 'libreros';
  }

  @Output() logout = new EventEmitter<void>();

  onLogout() {
    this.logout.emit();
    console.log('Logout');
  }



}
