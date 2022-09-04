import { Component, OnInit } from '@angular/core';
import { GlobalLoaderService } from '../global-loader.service';


@Component({
  selector: 'app-global-interceptor',
  templateUrl: './global-interceptor.component.html',
  styleUrls: ['./global-interceptor.component.css']
})
export class GlobalInterceptorComponent implements OnInit {

  constructor(public loader : GlobalLoaderService) { }
  
  ngOnInit(): void {

  }

}
