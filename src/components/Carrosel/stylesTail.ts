export const CarroselStyles = {
    containerCarrosel:
    `
    flex justify-center items-center
    w-full h-full
    `,

    carrosel:
    `
    flex
    py-1
    bg-[#000000bb]
    rounded
    shadow-[-5px_0px_10px_5px_rgba(0,0,0,0.3)]
    `,

    buttonCarrosel:
    `
    w-9
    z-50 
    bg-[#FBB600] hover:bg-[#B98600]
    border-4 border-y-0 border-black
    transition-all duration-300 ease-in-out
    `,

    divCarroselImgs:
    `
    flex justify-between items-center
    w-[600px] h-[400px]
    overflow-hidden
    `,

    info:
    `
    absolute
    flex flex-col justify-center
    w-[250px] h-[400px]
    bg-[#000000bb]
    font-bold text-[2.8rem] 
    max-[1200px]:text-[2.5rem] max-[1100px]:text-[2.4rem]
    max-[1000px]:text-[2rem]
    z-50
    cursor-default
    transition-all duration-500 ease-in-out
    `,

    size:
    `
    mb-[20px]
    text-[#a7a7a7]
    text-[1.7rem]
    max-[1200px]:text-[1.5rem] max-[1100px]:text-[1.4rem]
    max-[1000px]:text-[1rem]
    `,

    img:
    `
    flex-none
    w-[600px] h-[400px]
    bg-no-repeat object-cover
    transition-all duration-1000 ease-in-out
    translate-x-[0]
    `
}