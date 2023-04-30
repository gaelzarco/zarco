import { SlideUpP } from '@/components/motion'

export default function About() {
    return (
        <div className="flex flex-col pt-20 mx-auto items-center text-center content-center justify-center bg-neutral-900/10">

            <SlideUpP 
                className='text-6xl max-md:text-4xl pb-20'
                delay={0}
            >
                Gael Zarco
            </SlideUpP>

            <SlideUpP 
                className='leading-none text-md max-md:text-xs border border-white rounded-full p-1 px-2'
                delay={0.2}
            >
                UNDER CONSTRUCTION
            </SlideUpP>
        </div>
    )
}