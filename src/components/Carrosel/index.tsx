import { CarroselStyles } from './stylesTail'
import { useCallback, useEffect, useState }  from 'react'

import imgCarrosel1 from '../../assets/pizza1.jpg'
import imgCarrosel2 from '../../assets/pizza2.jpg'
import imgCarrosel3 from '../../assets/pizza3.jpg'



export const Carrosel = () => {

    const carrosel = [imgCarrosel1, imgCarrosel2, imgCarrosel3]
    const [i, setI] = useState(0);
    const [buttonBool, setButtonBool] = useState(Boolean)

    const HandleNextImg = () => {
      const imgs = document.querySelectorAll('#carrosel img') as NodeListOf<HTMLImageElement>;

      if (i > 0 && i >= 1) {
        imgs[0].style.transform = `translateX(${-2 * 600}px)`
        imgs[1].style.transform = `translateX(${-2 * 600}px)`
        imgs[2].style.transform = `translateX(${-0 * 600}px)`

        imgs[i].style.transform = `translateX(${-i * 600}px)`;
      } else if (i <= 0){
        imgs[0].style.transform = `translateX(${0 * 600}px)`
        imgs[1].style.transform = `translateX(${1 * 600}px)`
        imgs[2].style.transform = `translateX(${2 * 600}px)`
      }
    }

    const HandlePrevImg = () => {
      const imgs = document.querySelectorAll('#carrosel img') as NodeListOf<HTMLImageElement>;

      if (i <= 2 && i > 0) {
        imgs[0].style.transform = `translateX(${-2 * 600}px)`
        imgs[1].style.transform = `translateX(${-2 * 600}px)`
        imgs[2].style.transform = `translateX(${-0 * 600}px)`
        
        imgs[i].style.transform = `translateX(${-i * 600}px)`;
      } else if (i <= 0){
        imgs[0].style.transform = `translateX(${0 * 600}px)`
        imgs[1].style.transform = `translateX(${1 * 600}px)`
        imgs[2].style.transform = `translateX(${2 * 600}px)`
      }
    }

    useEffect(() => {
      if (buttonBool === true) {
        if (i >= 0 && i <= 2) {
          HandleNextImg()
        }
      }
      if (buttonBool === false) {
        if (i >= 0 && i <= 2) {
          HandlePrevImg()
        }
      }
    }, [i]);
  
    const handleNext = () => {
        if (i >= 2) {
          setI(0);
          setButtonBool(true)
        } else if (i >= 0 && i <= 2){
          setI(i + 1);
          setButtonBool(true)
        }
      };
    
      const handlePrev = () => {
        if (i <= 0) {
          setI(2);
          setButtonBool(false)
        } else if (i <= 2) {
          setI(i - 1);
          setButtonBool(false)
        }
      };
    
return (
    <div  className={CarroselStyles.containerCarrosel}>

        <button onClick={() => handlePrev()} className={CarroselStyles.buttonCarrosel}>-</button>

        <div id='carrosel' className={CarroselStyles.divCarrosel}>
             
            <img className={CarroselStyles.img} src={carrosel[0]} alt="" />
            <img className={CarroselStyles.img} src={carrosel[1]} alt="" />
            <img className={CarroselStyles.img} src={carrosel[2]} alt="" />
            
        </div>

        <button onClick={() => handleNext()} className={CarroselStyles.buttonCarrosel}>+</button>
    </div>
)
}