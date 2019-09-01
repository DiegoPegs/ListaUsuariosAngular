import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoadingSpinnerComponent } from "./loading-spinner/loading-spinner.component";
import { AlertComponent } from "./alert/alert.component";
import { DropdownDirective } from './dropdown.directive';
import { FilterPipe } from './filter.pipe';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [LoadingSpinnerComponent, AlertComponent, DropdownDirective, FilterPipe, SortPipe],
  imports: [CommonModule],
  exports: [CommonModule, LoadingSpinnerComponent, AlertComponent, DropdownDirective, FilterPipe, SortPipe]
})
export class SharedModule {}
