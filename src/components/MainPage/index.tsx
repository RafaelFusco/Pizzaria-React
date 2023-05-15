import { MainPageStyles } from "./stylesTail"
import PizzaList from "./index2"
import { itemsPizza } from "./items"


export const MainPage = () => {
    const pizzas = itemsPizza
    return (

        <div className={MainPageStyles.mainContainer}>
            <div className="fixed flex items-center w-full h-[50px] bg-black"></div>

            <div id="modal" className="w-full h-max p-2 pt-[50px] rounded">

            <PizzaList pizzas={pizzas}/>       
                
            </div>
        </div>
    )
}