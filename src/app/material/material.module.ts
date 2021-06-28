import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const materialComponent = [MatButtonModule];

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent],
})
export class MaterialModule {}
