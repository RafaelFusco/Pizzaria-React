export const MainPageStyles = {
    
    mainContainer:
    `
    flex
    flex-col
    w-full h-full
    bg-[url('./assets/background1.jpg')]
    bg-[length:100vw_100vh]
    rounded
    shadow-[-5px_0px_10px_5px_rgba(0,0,0,0.3)]
    `,

    itemListStyle:
    `
    flex justify-center flex-wrap 
    w-full h-full
    px-5
    `,

    itemStyle:
    `
    pizza-item 
    flex flex-col justify-center items-center 
    w-[300px] h-[400px] p-4 m-4 
    bg-[#000000bb]
    rounded 
    shadow-[-5px_0px_10px_5px_rgba(0,0,0,0.3)]
    `,

    itemDetailsContainer:
    `
    bg-[url('./assets/background1.jpg')]
    bg-[length:100vw_100vh]
    `,

    itemDetailsStyle:
    `
    pizza-item 
    flex flex-row max-[1000px]:flex-col justify-center items-center 
    w-[70%] h-max m-4 py-8 max-[1000px]:w-[80%] max-[500px]:w-full max-[500px]:m-3
    bg-[#000000bb]
    rounded 
    shadow-[-5px_0px_10px_5px_rgba(0,0,0,0.3)]
    `,

    sizesStyles:
    `
    m-1 p-1 rounded text-[11px] max-[1000px]:text-[10px]
    `

}