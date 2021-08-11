import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../intefaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: true// si se envía en false se actualizaría la imagen al guardar, pero consumiria recursos.
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if(!heroe.id && !heroe.alt_img)
    {
      return 'assets/no-image.png'
    } else if(heroe.alt_img){
      return heroe.alt_img;
    }else{
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }

}
