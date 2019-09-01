import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "sort"
})
export class SortPipe implements PipeTransform {
  transform(value: any, direction: any) {
    if (value === undefined) return value;

    return direction === 0 ? this.sortAsc(value) : this.sortDesc(value);
  }

  private sortAsc(value) {
    return value.sort(function(a, b) {
      if (a.nome > b.nome) {
        return 1;
      }
      if (a.nome < b.nome) {
        return -1;
      }
      return 0;
    });
  }

  private sortDesc(value) {
    return value.sort(function(a, b) {
      if (a.nome < b.nome) {
        return 1;
      }
      if (a.nome > b.nome) {
        return -1;
      }
      return 0;
    });
  }
}
