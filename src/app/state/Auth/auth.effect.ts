import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import {
  login,
  loginFailure,
  loginSuccess,
  register,
  registerFailure,
  registerSuccess
} from './auth.actions';
import { Store } from '@ngrx/store';
import { getUserProfile } from '../User/Actions';

@Injectable()
export class AuthEffects {

  login$ = createEffect(() =>
  this.actions$.pipe(
    ofType(login),
    switchMap(({ email, password }) =>
      this.authService.login(email, password).pipe(
        
        map((user:any) => { 
          console.log("login res ", user)
          localStorage.setItem("jwt",user.jwt)
          this.dispatchUserProfileAction()
          return loginSuccess({user})}
          ),
        catchError(async (error) => loginFailure({ error }))
      )
    )
  )
);

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      switchMap(({user}) =>
       {
        console.log("user switch ",user)
        return this.authService.register(user).pipe(
          tap(() => this.dispatchUserProfileAction()),
          map((res) => {
            console.log("register res ",res)
            localStorage.setItem("jwt",res.jwt)
            return registerSuccess()}),
          catchError(async(error) => registerFailure({ error }))
        )}
      )
    )
  );

  constructor(private actions$: Actions, private authService: AuthService,private store:Store) {}

  private dispatchUserProfileAction() {
    this.store.dispatch(getUserProfile());
  }
}
