import { Component, inject, OnDestroy, signal, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MediaMatcher } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-zine-showcase',
  imports: [CommonModule, MatListModule, MatSidenavModule, PdfViewerModule, MatIconModule, MatToolbarModule, MatButtonModule],
  templateUrl: './zine-showcase.component.html',
  styleUrl: './zine-showcase.component.scss'
})
export class ZineShowcaseComponent implements AfterViewInit, OnDestroy {
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
    "Boobs",
    "SamSmall",
    "ShannonC",
    "Steph_and_Charlotte",
    "Stevie",
    "TheVeryQueerCaterpillar",
    "VICKY",
    "Anonymous_01",
    "Anonymous_02",
    "Anonymous_03",
    "Anonymous_04",
  ]
  selectedPdf = 0;
  form: FormGroup;
  pdfControl = new FormControl();
  zoom = 1;
  @ViewChild('sideNav') sideNav: MatSidenav | undefined;

  protected readonly isMobile = signal(true);
  private readonly _mobileQuery: MediaQueryList;
  private readonly _mobileQueryListener: () => void;

  constructor() {
      this.form = new FormGroup({
      pdf: this.pdfControl,
    });

    const media = inject(MediaMatcher);

    this._mobileQuery = media.matchMedia('(max-width: 600px)');
    this.isMobile.set(this._mobileQuery.matches);
    this._mobileQueryListener = () => this.isMobile.set(this._mobileQuery.matches);
    this._mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngAfterViewInit(): void{
    if (!this.isMobile()){
      this.sideNav?.toggle();
    }
  }

  ngOnDestroy(): void {
    this._mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  onSelectionChange(i: number) {
    this.selectedPdf += i;
    if (this.selectedPdf > this.pdfSrc.length - 1) {
      this.selectedPdf = 0;
    } else if (this.selectedPdf < 0) {
      this.selectedPdf = this.pdfSrc.length - 1;
    }
  }

  onSelection(i: number) {
    this.selectedPdf = i;
    if (this.isMobile()) {
      this.sideNav?.toggle()
    }
  }


  onZoomChange(number: number) {
      const newZoom = this.zoom +(0.25 *number);

      if (newZoom < 5 && newZoom > 0) {
        this.zoom = newZoom;
      }
  }
}
