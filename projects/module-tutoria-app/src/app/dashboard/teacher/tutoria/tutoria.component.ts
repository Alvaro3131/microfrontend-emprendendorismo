import { Component, OnInit } from '@angular/core';
import { PsicologiaService } from '../../../services/psicologia.service';
import { Psicologo } from '../../../models/psicologo';
import { EspiritualService } from '../../../services/espiritual.service';
import { Asesor_espiritual } from '../../../models/asesor_espiritual';

@Component({
  selector: 'app-tutoria',
  templateUrl: './tutoria.component.html',
  styleUrls: ['./tutoria.component.scss']
})
export class TutoriaComponent implements OnInit {

  psicologos:Psicologo[]=[];
  asesores:Asesor_espiritual[]=[];
  asesor:Asesor_espiritual = new Asesor_espiritual;

  idAsesor?:number;
  nameAsesor?:string;
  apepatAsesor?:string;
  apematAsesor?:string;

  phoneAsesor?:string;
  emailAsesor?:string;
  type_personAsesor?:string;

  idPsico?:number;
  namePsico?:string;
  apepatPsico?:string;
  apematPsico?:string;

  phonePsico?:string;
  emailPsico?:string;
  type_personPsico?:string;


  constructor (
    private psicoService: PsicologiaService,
    private asesorService: EspiritualService
  ) { }

  ngOnInit() {
    this.getPsicologos();
    this.getAsesores();
  }

  getPsicologos() {
    this.psicoService.getPsicologos().subscribe(data => {
      this.psicologos = data.data;
    });
  }

  getPsicologos2daVez($event:any){
    this.psicoService.getPsicologos().subscribe(data => {
      this.psicologos = data.data;
    });
  }

  getAsesores() {
    this.asesorService.getAsesores().subscribe(data => {
      this.asesores = data.data;
    });
  }

  getAsesores2daVez($event:any) {
    this.asesorService.getAsesores().subscribe(data => {
      this.asesores = data.data;
    });
  }

  redirigirAWsp(phone:string) {
    window.open(`https://api.whatsapp.com/send?phone=51${phone}`,'_blank')
  }

  editPsico(
    id:number,
    name:string,
    phone:string,
    email:string,
    type_person:string
  ){
    this.idPsico = id;
    let partesNombre = name!.split(" ");

    this.namePsico = partesNombre[0];
    this.apepatPsico = partesNombre[1];
    this.apematPsico = partesNombre.slice(2).join(" ");
    this.phonePsico = phone;
    this.emailPsico = email;
    this.type_personPsico = type_person;
  }

  eliminarPsicologo(id_psicologo:number){
    this.psicoService.deletePsicologo(id_psicologo).subscribe(response => {
      this.getPsicologos();
    })
  }
  

  editAsesor(
    id:number,
    name:string,
    phone:string,
    email:string,
    type_person:string
  ){
    this.idAsesor = id;
    let partesNombre = name!.split(" ");

    this.nameAsesor = partesNombre[0];
    this.apepatAsesor = partesNombre[1];
    this.apematAsesor = partesNombre.slice(2).join(" ");
    this.phoneAsesor = phone;
    this.emailAsesor = email;
    this.type_personAsesor = type_person;
  }

  eliminarAsesor(id_asesor:number){
    this.asesorService.deleteAsesor(id_asesor).subscribe(response => {
      this.getAsesores();
    })
  }

}
