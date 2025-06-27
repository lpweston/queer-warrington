import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-zine-showcase',
  imports: [PdfViewerModule, MatIconModule],
  templateUrl: './zine-showcase.component.html',
  styleUrl: './zine-showcase.component.scss'
})
export class ZineShowcaseComponent {
  pdfSrc = [
    "LydiaFaye",
    "CameronG",
    "Evie",
    "James",
    "KatelynIball",
    "Luce",
    "penwing",
    "PHachet",
    "PipDunbar",
    "Anonymous_01",
    "Anonymous_02",
    "Anonymous_03",
    "Anonymous_04",
    "Boobs",
    "SamSmall",
    "ShannonC",
    "Steph_and_Charlotte",
    "Stevie",
    "TheVeryQueerCaterpillar",
    "VICKY",
  ]
  selectedPdf = 0;
  form: FormGroup;
  pdfControl = new FormControl();
  zoom = 1;

  constructor() {
    this.form = new FormGroup({
      pdf: this.pdfControl,
    });
  }

  onSelectionChange(i: number) {
    this.selectedPdf += i;
    if (this.selectedPdf > this.pdfSrc.length - 1) {
      this.selectedPdf = 0;
    } else if (this.selectedPdf < 0) {
      this.selectedPdf = this.pdfSrc.length - 1;
    }
  }

  onZoomChange(number: number) {
      const newZoom = this.zoom +(0.25 *number);

      if (newZoom < 5 && newZoom > 0) {
        this.zoom = newZoom;
      }
  }
}
