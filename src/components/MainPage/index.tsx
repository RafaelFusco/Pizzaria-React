import { MainPageStyles } from "./stylesTail"
import PizzaList from "./index2"
import { itemsPizza } from "./items"


export const MainPage = () => {

    return (

        <div className={MainPageStyles.mainContainer}>
            <div className="fixed flex items-center w-full h-[50px] bg-[#000000e9]"></div>

            <div id="modal" className="w-full h-max p-2 pt-14 rounded">

            <PizzaList pizzas={itemsPizza}/>       
                
            </div>
        </div>
    )
}