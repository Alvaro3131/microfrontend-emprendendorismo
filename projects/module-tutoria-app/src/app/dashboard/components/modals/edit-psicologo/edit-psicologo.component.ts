import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Psicologo } from 'projects/module-tutoria-app/src/app/models/psicologo';
import { PsicologiaService } from 'projects/module-tutoria-app/src/app/services/psicologia.service';

@Component({
  selector: 'app-edit-psicologo',
  templateUrl: './edit-psicologo.component.html',
  styleUrls: ['./edit-psicologo.component.scss']
})
export class EditPsicologoComponent {

  psico_edit:Psicologo = new Psicologo();

  @Input() id_psicologo?:number;
  @Input() name_edit2?:string;
  @Input() apepat_edit2?:string;
  @Input() apemat_edit2?:string;

  
  @Input() type_person_edit2?:string;
  @Input() email_edit2?:string;
  @Input() phone_edit2?:string;
  

  @Output() volveraListarPsicologos = new EventEmitter<void>();

  @ViewChild('close_modal4') close_modal4:any;

  constructor (private psicoService: PsicologiaService) { }

  ngOnInit() {
    
  }

  editarPsicologo() {

    this.psico_edit.name = this.name_edit2 + ' ' + this.apepat_edit2 + ' ' + this.apemat_edit2;
    this.psico_edit.phone = this.phone_edit2;
    this.psico_edit.email = this.email_edit2;
    this.psico_edit.type_person = this.type_person_edit2;

    console.log(this.id_psicologo);
    console.log(this.psico_edit);

    
    this.psicoService.editarPsicologo(this.id_psicologo!, this.psico_edit.name, this.psico_edit.phone!, this.psico_edit.email!, this.psico_edit.type_person!).subscribe(response => {
      this.close_modal4.nativeElement.click();
      this.volveraListarPsicologos.emit();
      //this.limpiar();
    });
    
  }

  /*
  limpiar() {
    this.name_edit2 = '';
    this.apepat_edit2 = '';
    this.apemat_edit2 = '';
    
    this.type_person_edit2 = '';
    this.phone_edit2 = '';
    this.email_edit2 = '';
    
  }
  */
}
