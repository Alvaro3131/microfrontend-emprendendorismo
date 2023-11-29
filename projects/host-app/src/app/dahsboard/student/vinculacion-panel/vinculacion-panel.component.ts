import { Component } from '@angular/core';

@Component({
  selector: 'app-vinculacion-panel',
  templateUrl: './vinculacion-panel.component.html',
  styleUrls: ['./vinculacion-panel.component.scss']
})
export class VinculacionPanelComponent {
  abrirWhatsApp() {
    const whatsappURL = 'https://api.whatsapp.com/send/?phone=51981131748&text&type=phone_number&app_absent=0';
    window.open(whatsappURL, '_blank');
  }
}
