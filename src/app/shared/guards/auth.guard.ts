import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs';

export const authGuard = () => {
  const router = inject(Router);
  const auth = inject(AuthService);

  return auth.isAuthenticated$.pipe(
    map(isAuthenticated => {
      if (!isAuthenticated) {
        // TODO: Show auth modal instead of redirecting
        router.navigate(['/']);
        return false;
      }
      return true;
    })
  );
};