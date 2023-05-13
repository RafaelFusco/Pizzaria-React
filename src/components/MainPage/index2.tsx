import { useState } from "react"

interface PizzaItem {
    id: number
    name: string
    img: string
    price: number
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
  
    const handleClick = () => {
      setSelected(!selected)
      onClick?.()
    }

    
return (
    <div className="pizza-item flex flex-col justify-center items-center w-[300px] h-[400px] p-4 bg-[#000000bb] rounded m-4" onClick={handleClick}>
        <img className="w-[60%]" src={pizza.img} alt={pizza.name} />
        <h3 className="text-[30px] font-bold">{pizza.name}</h3>
        <p className="m-5">{pizza.description}</p>
        <span className="text-[25px] font-bold">R$ {pizza.price.toFixed(2)}</span>
        {selected && <span>Selecionada</span>}
    </div>
    )
}
  
export const PizzaList = ({ pizzas }: PizzaListProps) => {
    return (
      <div className="pizza-list flex justify-center flex-wrap w-full h-full">
        {pizzas.map((pizza: PizzaItem, index: number) => (
          <Pizza key={index} pizza={pizza} />
        ))}
      </div>
    );
  };
  
  export default PizzaList;