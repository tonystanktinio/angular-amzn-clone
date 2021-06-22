import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../SERVICES/api.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  items: any[];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getProducts();
  }
  getProducts() {
    this.api.getJson().subscribe((resp) => {
      this.items = resp;
    });
  }
}
