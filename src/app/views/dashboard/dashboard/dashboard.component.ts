import { Component, OnInit, ViewChild } from "@angular/core";
const ELEMENT_DATA: any = [
  {
    img: "../../../../assets/imgs/p-1.png",
    name: "Women’s Vintage Peacoat",
    status: "Available",
    stock: "320 In Stock",
    total: "$29,192",
  },
  {
    img: "../../../../assets/imgs/p-2.png",
    name: "Women’s Oatmeal Sweater",
    status: "Sold",
    stock: "Out of Stock",
    total: "$29,192",
  },
  {
    img: "../../../../assets/imgs/p-3.png",
    name: "Women’s Denim Shirt",
    status: "Pending",
    stock: "3 In Stock",
    total: "$29,192",
  },
  {
    img: "../../../../assets/imgs/p-4.png",
    name: "Women’s Vintage Peacoat",
    status: "Pending",
    stock: "3 In Stock",
    total: "$29,192",
  },
];

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ["product", "status", "total"];
  dataSource = ELEMENT_DATA;

  days: any = ["Today", "Last 7 Days", "Last 30 Days"];

  constructor() {}

  ngOnInit() {}
}
