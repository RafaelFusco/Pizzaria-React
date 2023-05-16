import { useState } from "react"
import { MainPageStyles } from "./stylesTail"
import { AppStyles } from "../../stylesTail"

interface PizzaItem {
    id: number
    name: string
    img: string
    price: number
    sizes: string[]
    description: string
}

interface PizzaProps {
    pizza: PizzaItem
    onClick?: () => void
}

interface PizzaListProps {
    pizzas: PizzaItem[];
  }

const Pizza = ({ pizza, onClick }: PizzaProps) => {
    const [selected, setSelected] = useState(false)
    const [selectedSize, setSelectedSize] = useState<string | null>('55cm')
  
    const handleClick = () => {
      setSelected(!selected)
      onClick?.()
      selected ? document.documentElement.style.overflowY = 'auto' : document.documentElement.style.overflowY = 'hidden'
      setSelectedSize('55cm')
    }

    const handleSizeClick = (size: string) => {
      setSelectedSize(size)
    }

    const handleSizeName = (element: string) => {
      if (element == '30cm') {
        return 'Pequena'
      } else if (element == '40cm') {
        return 'Média'
      } else if (element == '55cm') {
        return 'Grande'
      } else {
        return 'Indefinida'
      }
    }

  return (
      <>
        <div className={`pizza-item ${MainPageStyles.itemStyle}`} onClick={handleClick}>
            <img className="w-[60%] m-4" src={pizza.img} alt={pizza.name} />
            <span className="text-[25px] font-bold">R$ {pizza.price.toFixed(2)}</span>
            <h3 className="text-[30px] font-bold">{pizza.name}</h3>
            <p className="m-5">{pizza.description}</p>
        </div>

        {selected &&
            <div className={`${MainPageStyles.itemDetailsContainer} ${MainPageStyles.itemDetailsBgImg}`}>

              <div className={`pizza-item ${MainPageStyles.itemDetailsStyle}`}>
                <img className="w-[35%] max-[1000px]:w-[35%] m-4" src={pizza.img} alt={pizza.name} />

                <div className="w-1/2 max-[1000px]:w-full flex flex-col items-center">
                  <h3 className="text-[30px] max-[1000px]:text-[25px] font-bold">{pizza.name}</h3>
                  <p className="m-2 w-[60%]">{pizza.description}</p>

                  <span className="flex flex-row m-1">
                    {pizza.sizes.map((element, index) => (

                      <button onClick={() => handleSizeClick(element)}
                      className={selectedSize === element ? `bg-[#FBB600] ${MainPageStyles.sizesStyles}` : `bg-[#525252] ${MainPageStyles.sizesStyles}`}
                      key={index}><span className={'text-[12px] max-[1000px]:text-[10px] font-bold'}>{handleSizeName(element)}</span> {element}
                      </button>

                    ))}
                  </span>
                    
                    <div className="flex">
                      <span className="text-[25px] max-[1000px]:text-[20px] font-bold mr-3">R$ {pizza.price.toFixed(2)}</span>
                      
                      <div className="flex items-center">

                        <button className="">-</button>
                        <div className="pizza-qt mx-2">1</div>
                        <button className="s">+</button>
            
                      </div>

                    </div>

                  <div className="flex flex-row justify-center items-center m-1 w-[90%]">
                    <button className={`${AppStyles.buttonEnter} max-[1000px]:text-[10px] max-[1000px]:w-[40%] max-[500px]:w-full w-[50%] px-2`}>Adicionar ao Carrinho</button>
                    <button className={`${MainPageStyles.buttonEnter} max-[1000px]:text-[10px] max-[1000px]:w-[40%] w-[40%] bg-[#505050] hover:bg-[#404040]`} onClick={handleClick}>Cancelar</button>
                  </div>
                </div>

              </div>

            </div>
        }
      </>
      )
}
  
export const PizzaList = ({ pizzas }: PizzaListProps) => {
    return (
      <div className={`pizza-list ${MainPageStyles.itemListStyle}`}>
        {pizzas.map((pizza: PizzaItem, index: number) => (
          <Pizza key={index} pizza={pizza}/>
        ))}
      </div>
    );
  };
  
  export default PizzaList;