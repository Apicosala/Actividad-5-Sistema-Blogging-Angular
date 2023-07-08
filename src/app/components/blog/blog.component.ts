import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Noticia } from 'src/app/interfaces/noticia.interface';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  @Input() misNoticias:Noticia[] = [];
  @Output() noticiaEmitida: EventEmitter<Noticia>;

  newNoticia:Noticia = { title: '', img: '', description: '', date: '' };

  constructor() {
    this.noticiaEmitida = new EventEmitter();
  }

  cargarNoticias():string {
    let html = '';
    this.misNoticias.forEach((noticia) => {
      html += `<article class="noticia">
      <img class="noticia__img" src="${noticia.img}" alt="${noticia.title}">
      <div class="noticia__text">
      <h3>${noticia.title}</h3>
      <p>${noticia.description}</p>
      <p>${noticia.date}</p>
      </div>
      </article>`;
    });
    return html;
  }

  capturarNoticia() {
    if (this.newNoticia.title !== '' && this.newNoticia.img !== '' && this.newNoticia.description !== '' && this.newNoticia.date !== '') {
      let existe = this.misNoticias.findIndex(
        (noticia) => noticia.title === this.newNoticia.title);
      if (existe === -1) {
        this.misNoticias.push(this.newNoticia);
        this.newNoticia = { title: '', img: '', description: '', date: '' };
      } else {
        alert('La noticia ya existe');
        return;
      }
    } else {
      alert('Debes rellenar los campos');
      return;
    }
    this.noticiaEmitida.emit(this.newNoticia);
    this.newNoticia = { title: '', img: '', description: '', date: '' };

  }
}
