import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Make sure to import FormsModule
import { AccountService } from '../_services/account.service';
import { NgIf } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'] // Corrected here
})
export class NavComponent {
  accountService = inject(AccountService);
  model: any = {};
 

  login() {
     this.accountService.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
     })
  }
  logout(){
    this.accountService.logout();
  }
}
