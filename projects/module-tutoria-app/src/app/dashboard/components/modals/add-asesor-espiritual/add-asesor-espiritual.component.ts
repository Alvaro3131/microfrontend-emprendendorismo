import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Asesor_espiritual } from 'projects/module-tutoria-app/src/app/models/asesor_espiritual';
import { EspiritualService } from 'projects/module-tutoria-app/src/app/services/espiritual.service';

@Component({
  selector: 'app-add-asesor-espiritual',
  templateUrl: './add-asesor-espiritual.component.html',
  styleUrls: ['./add-asesor-espiritual.component.scss']
})
export class AddAsesorEspiritualComponent {

  asesor_espiritual:Asesor_espiritual = new Asesor_espiritual();
  name?:string;
  apepat?:string;
  apemat?:string;

  @Output() volveraListarAsesores = new EventEmitter<void>();
  @ViewChild('close_modal2') close_modal2:any;

  constructor (private asesorService: EspiritualService) { }

  ngOnInit() {
    
  }

  registrarAsesor() {

    this.asesor_espiritual.name = this.name + ' ' + this.apepat + ' ' + this.apemat;
    console.log(this.asesor_espiritual);

    
    this.asesorService.registrarAsesor(this.asesor_espiritual).subscribe(response => {
      this.close_modal2.nativeElement.click();
      this.volveraListarAsesores.emit();
      this.limpiar();
    });
    
  }

  limpiar() {
    this.name = '';
    this.apepat = '';
    this.apemat = '';
    this.asesor_espiritual.name = '';
    this.asesor_espiritual.type_person = '';
    this.asesor_espiritual.phone = '';
    this.asesor_espiritual.email = '';
  }
}
