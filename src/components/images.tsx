import { type Dispatch, type ReactNode, type SetStateAction, useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Root as ApectRatio } from "@radix-ui/react-aspect-ratio"
import { CaretLeftIcon, CaretRightIcon, Cross2Icon, GitHubLogoIcon, VercelLogoIcon } from "@radix-ui/react-icons"

interface ImagesProps {
    title: string
    children: ReactNode
    image1: string,
    image2: string,
    image3: string,
    github: string,
    vercel: string
}

interface ImageCarouselProps {
    title: string,
    children: ReactNode,
    images: string[],
    count: number,
    setDisplay: Dispatch<SetStateAction<boolean>>,
    github: string,
    vercel: string
}

export default function Images( { title, children, image1, image2, image3, github, vercel } : ImagesProps ) {

    const [ showCarousel, setShowCarousel ] = useState(false)
    const [ currentImage, setCurrentImage ] = useState(0)

  return (
    <>
    {showCarousel && (
    <ImageCarousel title={title} 
    images={[image1, image2, image3]} 
    count={currentImage} setDisplay={setShowCarousel} 
    github={github} vercel={vercel}>
        {children}
    </ImageCarousel>
    )}
    
    <div className='flex flex-col p-4'onClick={() => setShowCarousel(!showCarousel)}>
        <div className="inline-flex">
            <ApectRatio ratio={32/9}>
                <img src={image1}height="auto" className="shadow-xl h-full w-full object-cover p-1 rounded-xl hover:cursor-pointer" onClick={() => setCurrentImage(0)}/>
            </ApectRatio>
             <ApectRatio ratio={32/9}>
                <img src={image2} height="auto" className="shadow-xl h-full w-full object-cover p-1 rounded-xl hover:cursor-pointer"onClick={() => setCurrentImage(1)}/>
            </ApectRatio>
        </div>
        <div className="flex flex-col">
            <ApectRatio ratio={16/9}>
                <img src={image3} width='100%' height="auto" className="shadow-xl h-full w-full p-1 object-cover rounded-xl hover:cursor-pointer" onClick={() => setCurrentImage(2)}/>
            </ApectRatio>
        </div>
    </div>
    </>
  )
}

export function ImageCarousel( { title, children, images, count, setDisplay, github, vercel } : ImageCarouselProps ) {

    const [ currentImage, setCurrentImage ] = useState(count)
    const [ fadeIn, setFadeIn ] = useState(false)

    const increment = () => {
        setFadeIn(false);
        setTimeout(() => {
          if (currentImage === images.length - 1) setCurrentImage(0);
          else setCurrentImage(currentImage + 1);
        }, 250); // Allow fade-out animation to complete
      };
    
      const decrement = () => {
        setFadeIn(false);
        setTimeout(() => {
          if (currentImage === 0) setCurrentImage(images.length - 1);
          else setCurrentImage(currentImage - 1);
        }, 250); // Allow fade-out animation to complete
      };

      useEffect(() => {
        // Allow the image to load before applying the fade-in animation
        const timeout = setTimeout(() => {
          setFadeIn(true);
        }, 100);
        return () => {
          clearTimeout(timeout);
        };
      }, [currentImage]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.75, ease: 'easeInOut' }}
            className="z-20 fixed flex justify-center content-center items-center w-screen h-screen top-0 left-0 bottom-0 right-0 shadow-2xl rounded-xl"
        >
            <div className="flex h-full w-full p-14 m-auto max-md:p-8 max-md:h-full max-md:w-full flex-col items-center bg-neutral-900/50 backdrop-blur-lg rounded-xl shadow-2xl">
                <div className="flex m-auto flex-col w-10/12 max-md:w-full xl:max-w-[1000px]">
                    <div className="inline-flex items-center justify-between">
                        <div className="inline-flex">
                            <h1 className='font-bold text-md leading-10 pt-4'>
                                {title}
                            </h1>
                        </div>
                        <div className="inline-flex items-center pt-4">
                            <Link href={github} target='_blank' className="mx-auto inline-flex items-center ml-4 p-2 text-neutral-200 bg-neutral-500/10 rounded-full hover:cursor-pointer hover:text-white hover:bg-neutral-500/20">
                                <GitHubLogoIcon />
                            </Link>
                            <Link href={vercel} target='_blank' className="mx-auto inline-flex items-center ml-4 p-2 text-neutral-200 bg-neutral-500/10 rounded-full hover:cursor-pointer hover:text-white hover:bg-neutral-500/20">
                                <VercelLogoIcon />
                            </Link>
                            <div 
                            className="mx-auto inline-flex items-center gap-5 p-2 ml-4 text-red-500 bg-red-500/10 rounded-full hover:cursor-pointer hover:text-red-400 hover:bg-red-400/10"
                            onClick={() => setDisplay(prevState => !prevState)}>
                                <Cross2Icon />
                            </div>
                        </div>
                    </div>
                    <div className='text-sm pb-6 pt-2'>
                        {children}
                    </div>
                    <img src={images[currentImage]}
                    width='auto'
                    height="auto"
                    className={`rounded-xl w-full m-auto xl:max-w-[1000px] transition-opacity duration-300 ${
                        fadeIn ? "opacity-100" : "opacity-0"
                    }`} />
                    <div className=" flex flex-col gap-5 p-5 items-center max-md:gap-16 text-sm">
                        <div className="inline-flex pt-5 gap-10 max-md:gap-20">
                            <div className="inline-flex p-2 rounded-full text-neutral-200 bg-neutral-500/10 items-center gap-5 hover:cursor-pointer hover:text-white hover:bg-neutral-500/20" 
                            onClick={decrement}>
                                <CaretLeftIcon/>
                                <p className="pr-4">Back</p>
                            </div>
                            <div className="inline-flex p-2 rounded-full text-neutral-200 bg-neutral-500/10 items-center gap-5 hover:cursor-pointer hover:text-white hover:bg-neutral-500/20" 
                            onClick={increment}>
                                <p className="pl-4">Next</p>
                                <CaretRightIcon />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}