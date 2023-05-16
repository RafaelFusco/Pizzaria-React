import { MainPageStyles } from "./stylesTail"
import PizzaList from "./index2"
import { itemsPizza } from "./items"
import { stack as Menu} from 'react-burger-menu';
import { useState } from "react";

interface Props {
    functionClick1: () => void;
    functionClick2: () => void;
    functionClick3: () => void;
}


export const MainPage: React.FC<Props> = ({functionClick1, functionClick2, functionClick3}) => {
    
    const menuStyles = {
        bmBurgerButton: {
            position: 'fixed',
            width: '50px',
            height: '30px',
            right: '0',
            top: '0',
            margin: '10px'
          },
          bmBurgerBars: {
            background: 'black'
          },
          bmBurgerBarsHover: {
            background: '#a90000'
          },
          bmCrossButton: {
            height: '24px',
            width: '24px'
          },
          bmCross: {
            background: '#FBB600'
          },
          bmMenuWrap: {
            position: 'fixed',
            height: '100%'
          },
          bmMenu: {
            background: 'black',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em'
          },
          bmMorphShape: {
            fill: '#373a47'
          },
          bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
          },
          bmItem: {
            
          },
          bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
          }
    }

    const [isOpen, setIsOpen] = useState(false);
    const pizzas = itemsPizza

    const exitMenu = () => {
        setIsOpen(false);
    }

    return (

        <div className={MainPageStyles.mainContainer}>
            <div className="fixed flex w-full h-[50px] bg-[#FBB600] z-[99]">
                <Menu 
                isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}
                styles={menuStyles}
                right >
                    
                    <a className="menu-item" onClick={functionClick1}>
                        Perfil
                    </a>
                    <a className="menu-item" >
                        Carrinho
                    </a>
                    <a className="menu-item" onClick={functionClick3}>
                        Sair
                    </a>
                </Menu>
            </div>
           
            <div id="modal" className="w-full h-max p-2 pt-[50px] rounded">

            <PizzaList pizzas={pizzas}/>       
                
            </div>
        </div>
    )
}