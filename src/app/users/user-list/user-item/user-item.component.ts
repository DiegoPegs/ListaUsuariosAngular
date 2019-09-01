import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../model/users.model';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input() usuario: User;
  @Input() index: number;

  ngOnInit() {}

}
