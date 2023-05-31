import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() routerLink!: string;
  @Input() routerLinkActiveOptions: { exact : boolean } = { exact: false };
}
