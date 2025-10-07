import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {Product} from '../product/product';
import { CommonModule } from '@angular/common'; 
import {ProductComponent} from '../components/product/product';
@Component({
  selector: 'app-root',
  standalone: true,                     
  imports: [RouterOutlet,FormsModule,ProductComponent,CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
  
})
export class App {
  sum =0;
  proArr = 
  [ new Product('ghost of yotei',70,false,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSy-pCMV_O2r2lCMaHdcVkpNVMJhX_kbJFFzgsVE3tYY6Nqvtrc8Gi-p73LJwFM_y46tScV'),
    new Product('doom the dark ages',70,false,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSa35T6R4Wu5tiy_usoDbhFCaMg0RbHgPRYQXNgUhEXB4MdQ32aaYh-mAE7X6-bVC61_likJQ'),
    new Product('split fiction',50,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Y4RBf-aYwSQb_UKl_zMtMJdb0DOyU-DbgCr_NoVTMDl_AEkMqGAoAazLNTtYYjuCHcvS'),
  new Product('expdition 33',70,false,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSrUsfBxfPMYJN_au0TpmDpM-B7UKz0y-g4orgNCpcbjuddHyitTPb5BMPaYnbIxv6p_Tm0'),
    new Product('blue prince',70,false,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ0gRGRmuxw9yDZguSZbmzJA1kZUzEM0T4i0r_Dn_Q9MO-fiU4RghB8-IfbZfMyr1K-68qX'),
    new Product('borderlands 4',50,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAvTkPkO-pIehrDsjeOwUjs9zxxKdwZwgZZhIQaORAUnTaMBoa2n3wVTRh4Jg-TokjE5EH'),
  new Product('helldivers 2',70,false,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0ZbsXhrLgeO3Z4E3JHsr7WSxamcp0ZS1vyW6JDJAjEQsy8PZTNo2LNozG-quGdnLzWmGV'),
    new Product('space marine 2',70,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBBAiZjSCONZsC76B39Kxfk5u4e6Sde49DK6-ORnXu8ioESKR0IjtC0WFCUYKa-Wvicmm48w'),
    new Product('Astro Bot',50,false,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR-3eb3MqH3rLzBQsREf8XEJXDVPKhUuXdUO3cOR5nzqDeMcNLVbG8HVSVHKnTxoVlByLq5'),
  new Product('Mario Kart World',70,false,'https://upload.wikimedia.org/wikipedia/en/6/65/Mario_Kart_World_Cover_Artwork.png'),
    new Product('Monster Hunter Wilds',70,false,'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5FYKD2Y_SJZfH5fletcAthEHXpObfOjOc4cpQmL4K-wIdfn75E7_JB5cKV71jHFyZPQS7'),
    new Product('Metroid Prime 4: Beyond',50,false,'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/software/switch/70010000084766/1bcf06d845f9027b4330e8d07658845a2fe3d66882bdaeb70325aeb35c54f1c9'),
  new Product('Metal gear solid snake eater',70,false,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSWTWrkViJJ3SizhFlTw-mjJ2n0ZvTLBeRxMTwRFaiTpjh0Idyrws3cRP9z3QqIglw1bk0YuA'),
    new Product('Silksong',70,false,'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTW_bAypISduMXh-QNecUxYP2svWKs_g-Bu-MQUXTpyYSsmAFYe2sXx5lmcBiW554a8EuYj'),
    new Product('BattleField 6',50,false,'https://www.gamespot.com/a/uploads/original/1179/11799911/4536498-screenshot2025-07-22at1.12.43pm.png'),
  new Product('Assassins Creed Shadows',70,false,'https://image.api.playstation.com/vulcan/ap/rnd/202404/1815/33f39cad34ac468a040ffed5a43149fb4329ec6c73326838.jpg'),
    new Product('Kingdom Come: Deliverance II',70,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQjBj25Yu80JCNW8lnrpQNakouW6ac2Wy58_EoeFt1_vUb7iihYkNQEXWBiCEJKS8977pw'),
    new Product('Mafia: The Old Country',50,false,'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRAL3MPMq7AXzdWAVyttySJ4JjEYH0ETljV0HGroQAxLVw0KJwgKuU9KX2QEvGhF1H5snDzuw'),
  new Product('Death Stranding 2: On the Beach',70,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9ew0Tedaea7mV6SC_dwjqDYsCgBio9qfnoa8zroASioSEDDLk9lo52oItQFig3sIS0d3y'),
    new Product('Donkey Kong Bananza',70,false,'https://upload.wikimedia.org/wikipedia/he/0/01/Donkey_Kong_Bananza_updated_box_art.png'),
    new Product('black myth wuckung',50,false,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0T25dto3Q-J7wGDOSRbgLbE5v5Nht1EdTenquChhFrj_vU17SREeDJpPAE_d7DHkbh80VKA')];
  proArrCheckedOut =[];


    AddToSum(newNum:Product[]): void {
      let i:number =0;
      this.sum =0;
      while (i<newNum.length ) {
        if(newNum[i].checkout == true){
        this.sum+=newNum[i].price;
        }
        i++;
      }
      
  
  }
    onNotify(message: string) {
      alert('enjoy your purchase ' + message);
      }
  } 
    
