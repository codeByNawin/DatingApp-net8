import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AccountService } from '../_services/account.service';
import { Toast, ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const accountServive = inject(AccountService);
  const toastr = inject(ToastrService);

  if (accountServive.currentUser()) {
    return true;
  } else {
    toastr.error("You shall not pass!");
    return false;
  }
  return true;
};
