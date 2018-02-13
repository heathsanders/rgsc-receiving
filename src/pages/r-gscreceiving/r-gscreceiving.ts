import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-r-gscreceiving',
  templateUrl: 'r-gscreceiving.html'
})
export class RGSCReceivingPage {

  scannedCode = null;

  constructor(private barcodeScanner: BarcodeScanner) { }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
        console.log('Error: ', err);
    });
  }
  
}
