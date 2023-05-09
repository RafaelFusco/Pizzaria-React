import { CarroselStyles } from './stylesTail'
import { useCallback, useEffect, useState }  from 'react'

import imgCarrosel1 from '../../assets/pizza1.jpg'
import imgCarrosel2 from '../../assets/pizza2.jpg'
import imgCarrosel3 from '../../assets/pizza3.jpg'

import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import styles from './styles.module.css'

export const Carrosel = () => {
    const carrosel = [imgCarrosel1, imgCarrosel2, imgCarrosel3]
    const [i, setI] = useState(0);

    const HandlePositionImg = (n: number, p1: number, p2: number) => {
      const imgs = document.querySelectorAll('#carroselImgs img') as NodeListOf<HTMLImageElement>;

      imgs[n].style.cssText = `transform: translateX(${p1 * p2}px); opacity: 0;`
    }

    const HandleAllPositionImg = useCallback((
      n0: number, n1: number, n2: number,
      p0: number, p1: number, p2: number,
      x0: number, x1: number, x2: number) => {
        HandlePositionImg(n0, p0, x0)
        HandlePositionImg(n1, p1, x1)
        HandlePositionImg(n2, p2, x2) 
    }, [])

    const HandleNextImg = useCallback(() => {
      const imgs = document.querySelectorAll('#carroselImgs img') as NodeListOf<HTMLImageElement>;
      
      i > 0 && i >= 1 ? HandleAllPositionImg(0, 1, 2, -2, -2, 0, 300, 600, 600) : HandleAllPositionImg(0, 1, 2, 0, 1, 2, 300, 600, 600)
      imgs[i].style.cssText = `transform: translateX(${-i * 600}px); opacity: 1;`
      
    }, [i, HandleAllPositionImg])

    const HandleToDefineInfo = (name: string, size: string, price: string,  ) => {
      const info = document.querySelector('#info') as HTMLDivElement
        info.style.opacity = '0'
      setTimeout(() => {
        info.style.opacity = '1'
        info.innerHTML = `${name} <span class="${CarroselStyles.size}">(${size}cm)</span> <span class="${styles.price}">R$${price}</span>`
      }, 1000);
    }

    const HandleInfo = useCallback(() => {
      const imgs = document.querySelectorAll('#carroselImgs img') as NodeListOf<HTMLImageElement>;
        imgs[0].style.opacity === '1' ? HandleToDefineInfo("Calabresa", "40", "32,99") : null
        imgs[1].style.opacity === '1' ? HandleToDefineInfo("Margarita", "40", "28,99") : null
        imgs[2].style.opacity === '1' ? HandleToDefineInfo("Pepperoni", "40", "35,99") : null
    }, [])

    useEffect(() => {
      HandleNextImg();
      HandleInfo()
    }, [i, HandleNextImg, HandleInfo])

    const HandleNext = () => {
      return i >= 2 ? setI(0) : setI(i + 1)
    }
  
    const HandlePrev = () => {
      return i <= 0 ? setI(2) : setI(i - 1)
    }

return (
  <div className={CarroselStyles.containerCarrosel}>
    <div className={CarroselStyles.carrosel}>

      <button onClick={() => HandlePrev()} className={CarroselStyles.buttonCarrosel}><img src={leftArrow} alt="<"/></button>

      <div id='carroselImgs' className={CarroselStyles.divCarroselImgs}>

          <div id='info' className={CarroselStyles.info}></div>

          <img className={CarroselStyles.img} src={carrosel[0]} alt="Calabresa"/>
          <img className={CarroselStyles.img} src={carrosel[1]} alt="Margarita"/>
          <img className={CarroselStyles.img} src={carrosel[2]} alt="Pepperoni"/>
          
      </div>

      <button onClick={() => HandleNext()} className={CarroselStyles.buttonCarrosel}><img src={rightArrow} alt=">"/></button>

    </div>
  </div>
)
}