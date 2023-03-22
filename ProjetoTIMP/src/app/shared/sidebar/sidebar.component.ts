import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Route, Router } from "@angular/router";
import { SessionService } from "../service/session.service";

@Component({
  selector: "my-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent {
  constructor(
    private session:SessionService,
    private router:Router
  ){}
  @Input() isExpanded: boolean = false;
  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleSidebarToggle = () => this.toggleSidebar.emit(!this.isExpanded);
  logout(){
    this.session.limparSessao();
  }
}
