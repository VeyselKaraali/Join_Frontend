import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Location} from "@angular/common";
import {CONTACT_DATA} from "../../../../constants/contact-data";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-legal-notice-view',
  standalone: true,
    imports: [
        MatIcon
    ],
  templateUrl: './legal-notice-view.component.html',
  styleUrl: './legal-notice-view.component.scss'
})
export class LegalNoticeViewComponent {
  contactData = CONTACT_DATA;
  constructor(private location: Location, private meta: Meta) {
    this.meta.addTag({ name: 'robots', content: 'noindex, nofollow, noimageindex' });
  }

  public goToPreviousPage() {
    this.location.back();
  }
}
