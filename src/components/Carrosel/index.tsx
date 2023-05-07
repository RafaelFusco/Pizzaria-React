import { CarroselStyles } from './stylesTail'
import { useCallback, useEffect, useState }  from 'react'

import imgCarrosel1 from '../../assets/pizza1.jpg'
import imgCarrosel2 from '../../assets/pizza2.jpg'
import imgCarrosel3 from '../../assets/pizza3.jpg'

import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'



export const Carrosel = () => {

    const carrosel = [imgCarrosel1, imgCarrosel2, imgCarrosel3]
    const [i, setI] = useState(0);
    const [buttonBool, setButtonBool] = useState(Boolean)

    const HandleNextImg = useCallback(() => {
      const imgs = document.querySelectorAll('#carroselImgs img') as NodeListOf<HTMLImageElement>;

      if (i > 0 && i >= 1) {
        imgs[0].style.cssText = `transform: translateX(${-2 * 300}px); opacity: 0;`
        imgs[1].style.cssText = `transform: translateX(${-2 * 600}px); opacity: 0;`
        imgs[2].style.cssText = `transform: translateX(${0 * 600}px); opacity: 0;`
        
        imgs[i].style.cssText = `transform: translateX(${-i * 600}px); opacity: 1;`;

      } else if (i <= 0){
        imgs[0].style.cssText = `transform: translateX(${0 * 300}px); opacity: 0`
        imgs[1].style.cssText = `transform: translateX(${1 * 600}px); opacity: 0`
        imgs[2].style.cssText = `transform: translateX(${2 * 600}px); opacity: 0`

        imgs[i].style.cssText = `transform: translateX(${-i * 600}px); opacity: 1;`
      }
    }, [i])

    const HandlePrevImg = useCallback(() => {
      const imgs = document.querySelectorAll('#carroselImgs img') as NodeListOf<HTMLImageElement>;

      if (i > 0 && i <= 2) {
        imgs[0].style.cssText = `transform: translateX(${-2 * 300}px); opacity: 0;`
        imgs[1].style.cssText = `transform: translateX(${-2 * 600}px); opacity: 0;`
        imgs[2].style.cssText = `transform: translateX(${0 * 600}px); opacity: 0;`
        
        imgs[i].style.cssText = `transform: translateX(${-i * 600}px); opacity: 1;`
      } else if (i <= 0){
        imgs[0].style.cssText = `transform: translateX(${0 * 300}px); opacity: 0`
        imgs[1].style.cssText = `transform: translateX(${1 * 600}px); opacity: 0`
        imgs[2].style.cssText = `transform: translateX(${2 * 600}px); opacity: 0`

        imgs[i].style.cssText = `transform: translateX(${-i * 600}px); opacity: 1;`
      }
    }, [i])

    useEffect(() => {
      buttonBool ? HandleNextImg() : HandlePrevImg()
    }, [HandleNextImg, HandlePrevImg, i, buttonBool]);
  
    const handleNext = () => {
      setButtonBool(true)
      return i >= 2 ? setI(0) : setI(i + 1)
    }
  
    const handlePrev = () => {
      setButtonBool(false)
      return i <= 0 ? setI(2) : setI(i - 1)
    }

return (
    <div className={CarroselStyles.containerCarrosel}>
      <div className='flex p-3 bg-[#000000bb] rounded  shadow-[-5px_0px_10px_5px_rgba(0,0,0,0.3)]'>

        <button onClick={() => handlePrev()} className={CarroselStyles.buttonCarrosel}><img src={leftArrow} alt="<"/></button>

        <div id='carroselImgs' className={CarroselStyles.divCarroselImgs}>

            <div className='absolute w-[250px] h-[400px] z-50 bg-[#000000bb]'>calabresa <br /> margarita <br /> pepperoni</div>

            <img className={CarroselStyles.img} src={carrosel[0]} alt="Calabresa" />
            <img className={CarroselStyles.img} src={carrosel[1]} alt="Margarita" />
            <img className={CarroselStyles.img} src={carrosel[2]} alt="Pepperoni" />
            
        </div>

        <button onClick={() => handleNext()} className={CarroselStyles.buttonCarrosel}><img src={rightArrow} alt=">"/></button>

      </div>
    </div>
)
}