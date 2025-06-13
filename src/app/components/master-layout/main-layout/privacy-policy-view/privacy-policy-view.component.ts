import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Location} from "@angular/common";
import {CONTACT_DATA} from "../../../../constants/contact-data";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-privacy-policy-view',
  standalone: true,
  imports: [
    MatIcon
  ],
  templateUrl: './privacy-policy-view.component.html',
  styleUrl: './privacy-policy-view.component.scss'
})
export class PrivacyPolicyViewComponent {
  contactData = CONTACT_DATA;
  constructor(private location: Location, private meta: Meta) {
    this.meta.addTag({ name: 'robots', content: 'noindex, nofollow, noimageindex' });
  }

  public goToPreviousPage() {
    this.location.back();
  }
}
