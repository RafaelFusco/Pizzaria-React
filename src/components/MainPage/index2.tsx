import { useCallback, useEffect, useState } from "react"
import { MainPageStyles } from "./stylesTail"
import { AppStyles } from "../../stylesTail"
import { ButtonCart } from "../ButtonCart"

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
  functionClick1?: () => void
  functionClick2?: () => void
}

interface PizzaListProps {
  pizzas: PizzaItem[];
  functionClick1?: () => void
  functionClick2?: () => void
}

const Pizza = ({ pizza, functionClick1 }: PizzaProps) => {
  const [selected, setSelected] = useState(false)
  const [selectedSize, setSelectedSize] = useState<string | null>('55cm')
  const [priceSize, setPriceSize] = useState(0)
  const [amount, setAmountOfPizzas] = useState(1)

  const handleClick = () => {
    setSelected(!selected)
    selected ? document.documentElement.style.overflowY = 'auto' : document.documentElement.style.overflowY = 'hidden'
    setSelectedSize('55cm')
    setAmountOfPizzas(1)
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

  const handlePriceSize = useCallback(() => {
    selectedSize === '30cm' ? setPriceSize(pizza.price) : null
    selectedSize === '40cm' ? setPriceSize(pizza.price + 5.00) : null
    selectedSize === '55cm' ? setPriceSize(pizza.price + 10.00) : null

    return priceSize
  }, [pizza.price, priceSize, selectedSize])

  const addOnePizza = () => {
    return setAmountOfPizzas(amount + 1)
  }

  const removeOnePizza = () => {
    return amount > 1 ? setAmountOfPizzas(amount - 1) : null
  }

  useEffect(() => {
    handlePriceSize()
  }, [selected, handlePriceSize])

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

              <div className="flex w-[60%] justify-evenly">
                <span className="text-[25px] max-[1000px]:text-[20px] font-bold mr-3">R$ {(priceSize * amount).toFixed(2)}</span>

                <div className="flex items-center">

                  <button className="px-2" onClick={removeOnePizza}>-</button>
                  <div className="pizza-qt mx-2">{amount}</div>
                  <button className="px-2" onClick={addOnePizza}>+</button>

                </div>

              </div>

              <div className={MainPageStyles.containerButton}>
                <ButtonCart el={pizza} functionClick11={functionClick1} ClassName1={`${AppStyles.buttonEnter} ${MainPageStyles.buttonCart}`} />
                <button className={`${MainPageStyles.buttonEnter} ${MainPageStyles.buttonCancel}`} onClick={handleClick}>Cancelar</button>
              </div>
            </div>

          </div>

        </div>
      }
    </>
  )
}

export const PizzaList = ({ pizzas, functionClick1, functionClick2 }: PizzaListProps) => {
  return (
    <div className={`pizza-list ${MainPageStyles.itemListStyle}`}>
      {pizzas.map((pizza: PizzaItem, index: number) => (
        <Pizza key={index} pizza={pizza} functionClick1={functionClick1} functionClick2={functionClick2} />
      ))}
    </div>
  );
};

export default PizzaList;