import { Component } from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {Location} from "@angular/common";
import {CONTACT_DATA} from "../../../../constants/contact-data";
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'app-imprint-view',
  standalone: true,
    imports: [
        MatIcon
    ],
  templateUrl: './imprint-view.component.html',
  styleUrl: './imprint-view.component.scss'
})
export class ImprintViewComponent {
  contactData = CONTACT_DATA;
  constructor(private location: Location, private meta: Meta) {
    this.meta.addTag({ name: 'robots', content: 'noindex, nofollow, noimageindex' });
  }

  public goToPreviousPage() {
    this.location.back();
  }
}
