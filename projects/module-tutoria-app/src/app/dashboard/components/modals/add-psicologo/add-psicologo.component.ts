import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Psicologo } from 'projects/module-tutoria-app/src/app/models/psicologo';
import { PsicologiaService } from 'projects/module-tutoria-app/src/app/services/psicologia.service';

@Component({
  selector: 'app-add-psicologo',
  templateUrl: './add-psicologo.component.html',
  styleUrls: ['./add-psicologo.component.scss']
})
export class AddPsicologoComponent implements OnInit{

  psicologo:Psicologo = new Psicologo();
  name?:string;
  apepat?:string;
  apemat?:string;

  @Output() volveraListarPsicologos = new EventEmitter<void>();
  @ViewChild('close_modal1') close_modal1:any;

  constructor (private psicoService: PsicologiaService) { }

  ngOnInit() {
    
  }

  registrarPsicologo() {

    this.psicologo.name = this.name + ' ' + this.apepat + ' ' + this.apemat;
    console.log(this.psicologo);

    
    this.psicoService.registrarPsicologo(this.psicologo).subscribe(response => {
      this.close_modal1.nativeElement.click();
      this.volveraListarPsicologos.emit();
      this.limpiar();
    });
    
  }

  limpiar() {
    this.name = '';
    this.apepat = '';
    this.apemat = '';
    this.psicologo.name = '';
    this.psicologo.type_person = '';
    this.psicologo.phone = '';
    this.psicologo.email = '';
  }
}
