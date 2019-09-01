import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter"
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterBy: string) {
    if (items == undefined || items.length === 0 || filterBy === undefined || filterBy === "") {
      return items;
    }

    const filterName = items.filter(
      items => items.nome.toLowerCase().indexOf(filterBy.toLowerCase()) > -1
    );

    return filterName;
  }
}
