import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Asesor_espiritual } from 'projects/module-tutoria-app/src/app/models/asesor_espiritual';
import { EspiritualService } from 'projects/module-tutoria-app/src/app/services/espiritual.service';
@Component({
  selector: 'app-edit-asesor-espiritual',
  templateUrl: './edit-asesor-espiritual.component.html',
  styleUrls: ['./edit-asesor-espiritual.component.scss']
})
export class EditAsesorEspiritualComponent {

  asesor_espiritual_edit:Asesor_espiritual = new Asesor_espiritual();

  @Input() id_asesor?:number;
  @Input() name_edit1?:string;
  @Input() apepat_edit1?:string;
  @Input() apemat_edit1?:string;

  
  @Input() type_person_edit1?:string;
  @Input() email_edit1?:string;
  @Input() phone_edit1?:string;
  

  @Output() volveraListarAsesores = new EventEmitter<void>();

  @ViewChild('close_modal3') close_modal3:any;

  constructor (private asesorService: EspiritualService) { }

  ngOnInit() {
    
  }

  editarAsesor() {

    this.asesor_espiritual_edit.name = this.name_edit1 + ' ' + this.apepat_edit1 + ' ' + this.apemat_edit1;
    this.asesor_espiritual_edit.phone = this.phone_edit1;
    this.asesor_espiritual_edit.email = this.email_edit1;
    this.asesor_espiritual_edit.type_person = this.type_person_edit1;

    console.log(this.id_asesor);
    console.log(this.asesor_espiritual_edit);

    
    this.asesorService.editarAsesor(this.id_asesor!, this.asesor_espiritual_edit.name, this.asesor_espiritual_edit.phone!, this.asesor_espiritual_edit.email!, this.asesor_espiritual_edit.type_person!).subscribe(response => {
      this.close_modal3.nativeElement.click();
      this.volveraListarAsesores.emit();
      //this.limpiar();
    });
    
  }

  /*
  limpiar() {
    this.name_edit1 = '';
    this.apepat_edit1 = '';
    this.apemat_edit1 = '';
    
    this.type_person_edit1 = '';
    this.phone_edit1 = '';
    this.email_edit1 = '';
    
  }
  */
}
