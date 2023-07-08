import { Component } from '@angular/core';
import { Noticia } from './interfaces/noticia.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noticias: Noticia[] = [];
  newNoticia!:Noticia;

  constructor() {
    this.noticias = [
      {
        title: 'El tatuaje de un serranito que triunfa en redes sociales',
        img: 'https://fotografias.lasexta.com/clipping/cmsimages02/2023/04/04/03C90D39-CCEC-484F-A16D-22385002A66A/diseno-serranito-tatuado-evelyn-terras_60.jpg',
        description: 'La obra ha sido muy aplaudida en los últimos días por multitud de usuarios, aunque hay usuarios de distintas redes sociales que han aportado la nota discordante al dudar de los ingredientes que aparecen en el mencionado tatuaje.',
        date: '2023-07-01'
      },
      {
        title: 'La cabra escapista que ha dejado a todos con la boca abierta',
        img: 'https://fotografias.lasexta.com/clipping/cmsimages01/2023/02/18/CB5EF42A-E9CC-4990-9494-D8F56B896914/cabra-escapista_14.jpg',
        description: 'Una cabra ha dejado impresionados a todos tras lograr escapar de su jaula con una habilidad que parece sacada de una película de acción.',
        date: '2023-07-07'
      }
    ]
  }
  capturarNoticia($event:Noticia) {
    this.noticias.push($event);
  }
}
/*
  guardarNoticia():void {

    if (this.misNoticias. !== '' && this.misNoticias.img !== '' && this.misNoticias.description !== '' && this.misNoticias.date !== '') {
      this.misNoticias.push(this.newNoticia);
      this.newNoticia = { title: '', img: '', description: '', date: '' };
    }
    /*

    if (this.newContacto.name !== '' && this.newContacto.phone !== 0 && this.newContacto.phone !== null) {

      let existe = this.arrContactos.findIndex(
        (contacto) => contacto.phone === this.newContacto.phone);
      if (existe === -1) {
      this.arrContactos.push(this.newContacto);
      this.newContacto = { name: '', phone: 0 };//limpiamos el formulario
      } else {
        alert('El contacto ya existe');
      }
    } else
        alert('Debes rellenar los campos');

        */

