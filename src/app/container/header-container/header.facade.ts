import { Injectable } from "@angular/core";
import { Subscription } from "rxjs";
import { StorageService } from "../../core/services/generals/storage.service";
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root',
  })
  export class HeaderContainerFacade {


    private subscriptions: Subscription = new Subscription;
    
  
    constructor(
        private readonly storageService: StorageService,       
    ) {}
  
    initSubscriptions(): void {
      this.subscriptions = new Subscription();
    }
  
    destroySubscriptions(): void {
      this.subscriptions.unsubscribe();
    }
  
    remove(key: string): void {
       this.storageService.remove(key);
       window.location.href = 'https://www.youtube.com/watch?v=xvFZjo5PgG0';
    }

  }