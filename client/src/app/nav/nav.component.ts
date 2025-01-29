import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Make sure to import FormsModule
import { AccountService } from '../_services/account.service';
import { NgIf, TitleCasePipe } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, BsDropdownModule, RouterLink, RouterLinkActive,TitleCasePipe],
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'] // Corrected here
})
export class NavComponent {
  accountService = inject(AccountService);
  private router = inject(Router)
  private toastr = inject(ToastrService);
  model: any = {};
 

  login() {
     this.accountService.login(this.model).subscribe({
      next: _ => {
        this.router.navigateByUrl('/members')
      },
      error: error => this.toastr.error(error.error)
     })
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
