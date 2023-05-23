import { useState, useEffect } from "react"

interface PizzaItem {
    id: number
    name: string
    img: string
    price: number
    sizes: string[]
    description: string
}

interface PizzaListProps {
    ClassName1: string
    el: PizzaItem
    functionClick11?: () => void
}


export const ButtonCart: React.FC<PizzaListProps> = ({ClassName1, functionClick11, el}) => {
  
    const [arrayPizza, setArrayPizza] = useState<PizzaItem[]>([])

    const PizzaItemMenu = async (elMenu: PizzaItem): Promise<PizzaItem> => {
        const updatedArrayPizza = [elMenu]
        setArrayPizza(updatedArrayPizza)
        return elMenu
    }
    
    useEffect(() => {
      console.log(arrayPizza.length, arrayPizza)
    }, [arrayPizza])

    const handleClick = async () => {
        await PizzaItemMenu(el)
    }

    const handleClick2 = () => {
        if (functionClick11) {
            functionClick11()
        }
    }

    const handleFunctions = () => {
        handleClick()
        handleClick2()
    }
    return <button className={ClassName1} onClick={() => handleFunctions()}>Adicionar ao carrinho</button>;
}
  
  
  
  
  






