import { Component } from '@angular/core';
import { HOTEL } from '../../core/hotel-info';
import { TPipe } from '../../core/t.pipe';

@Component({
  selector: 'app-whatsapp-button',
  imports: [TPipe],
  templateUrl: './whatsapp-button.html',
})
export class WhatsappButtonComponent {
  protected readonly href = HOTEL.whatsapp.href;
}
