import {Component, ElementRef, HostListener, OnInit, Renderer2} from '@angular/core';
import {AppComponent} from "../app.component"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public myApp: AppComponent, private renderer: Renderer2, private el: ElementRef) {
  }
  ngOnInit(): void {
  }

  closeNavbar() {
    const navbarToggler = document.querySelector('.navbar-toggler') as HTMLElement;
    if (navbarToggler) {
      navbarToggler.click();
    }
  }

  inView(ele:any){
    document.getElementById(ele)?.scrollIntoView()
  }

  menuItems = [
    {linkId: "first", linkName: 'Hall of Fame'},
    {linkId: "second", linkName: 'Sweet Temptation'},
    {linkId: "third", linkName: 'Spirit in the Sky'},
    {linkId: "contact", linkName: 'Bestellen'},
  ]

  active = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.active = scrollPosition < 50; // Adjust as needed
  }

  private isNavbarOpen = false;

  toggleNavbar() {
    const body = this.el.nativeElement.ownerDocument.body;
    this.isNavbarOpen = !this.isNavbarOpen;

    if (this.isNavbarOpen) {
      this.renderer.addClass(body, 'no-scroll');
    } else {
      this.renderer.removeClass(body, 'no-scroll');
    }
  }
}
