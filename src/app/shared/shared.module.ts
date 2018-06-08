import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalService } from './principal.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [PrincipalService]
})
export class SharedModule { }
