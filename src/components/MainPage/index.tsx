import { MainPageStyles } from "./stylesTail"
import PizzaList from "./index2"
import { itemsPizza } from "./items"
import { stack as Menu} from 'react-burger-menu'
import { useState} from "react"
import imgPerfilDefault from '../../assets/perfil.png'

interface Props {
  functionClick3: () => void
}

export const MainPage: React.FC<Props> = ({functionClick3}) => {
    
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
          display: 'flex',
          flexDirection: 'column',
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
    const [shoppingCart, setShoppingCart] = useState(false)
    const [perfilMenu, setPerfilMenu] = useState(false)

    const [cartt, setCartt] = useState(false)

    const pizzas = itemsPizza

    const openCart = () => {
      setIsOpen(true);
      setShoppingCart(true)
      setCartt(true)
      setPerfilMenu(false)
    }

    const closeCart = () => {
      setShoppingCart(false)
      return cartt
    }

    const openPerfilMenu = () => {
      setPerfilMenu(true)
    }

    const closePerfilMenu = () => {
      setPerfilMenu(false)
    }

    return (

        <div className={MainPageStyles.mainContainer}>
            <div className="fixed flex w-full h-[50px] bg-[#FBB600] z-[99]">
                <Menu 
                isOpen={isOpen} onStateChange={({ isOpen }) => setIsOpen(isOpen)}
                styles={menuStyles}
                right >
                      {!shoppingCart && !perfilMenu &&
                        <>
                          <a className="menu-item hover:text-white cursor-pointer" onClick={openPerfilMenu}>
                              Perfil
                          </a>
                          <a className="menu-item hover:text-white cursor-pointer" onClick={openCart}>
                              Carrinho
                          </a>
                          <a className="menu-item hover:text-white cursor-pointer" onClick={functionClick3}>
                              Sair
                          </a>
                        </>
                      }
                      {perfilMenu && !shoppingCart &&
                        <>
                          <h1 className="menu-item my-5" >
                            Perfil
                          </h1>
                          <div className="flex flex-col items-center">

                            <img src={imgPerfilDefault} className="w-1/2 mb-5"/>

                            <input type="name" disabled className='text-center bg-transparent' placeholder="Fulano" />
                            <input type="data" disabled className='text-center bg-transparent' placeholder="01/01/2000"/>
                            <input type="email" disabled className='text-center bg-transparent' placeholder="exemplo@gmail.com" />

                            <p className="my-3 text-red-600">
                              ( Ainda não foi desenvolvido )
                            </p>
                          </div>
                          
                          <a className="menu-item hover:text-white cursor-pointer my-5" onClick={closePerfilMenu}>
                            Sair do perfil
                          </a>
                        </>                      
                      }
                      {shoppingCart && !perfilMenu &&
                        <>
                          <h1 className="menu-item" >
                            Carrinho
                          </h1>

                          <div>
                            <p className="text-red-700 my-10">
                              ( Ainda não foi desenvolvido )
                            </p>
                          </div>

                          <a className="menu-item hover:text-white cursor-pointer" onClick={closeCart}>
                            Sair do carrinho
                          </a>
                        </>
                      }
                </Menu>
            </div>
           
            <div id="modal" className="w-full h-max p-2 pt-[50px] rounded">

            <PizzaList pizzas={pizzas} functionClick1={openCart}/>       
                
            </div>
        </div>
    )
}