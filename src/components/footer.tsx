import Link from 'next/link'
import { ArrowUpIcon} from '@radix-ui/react-icons'
import { SlideUpDiv } from './motion'

export default function Footer() {
    return (
        <div className='bottom-0 flex flex-col w-full max-sm:-mt-6'>
            <Link href='mailto:gaelxarco@icloud.com' target='_blank'
                className='footer-container relative block h-[120px] max-sm:h-[45px] bg-neutral-900/10 min-w-full border border-white rounded-lg max-sm:rounded-md text-8xl max-sm:text-3xl mt-8 hover:bg-white hover:text-black cursor-pointer overflow-hidden'
            >
                <div className='absolute block whitespace-nowrap min-w-full h-full footer-scroll'>
                    <span className='inline-block text-center whitespace-nowrap m-auto min-w-full h-full leading-[120px] max-sm:leading-[45px]'>
                        CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;
                    </span>
                </div>
                <div className='absolute block whitespace-nowrap min-w-full h-full footer-scroll footer-scroll2'>
                    <span className='inline-block text-center whitespace-nowrap m-auto min-w-full h-full leading-[120px] max-sm:leading-[45px]'>
                        CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;CONTACT&nbsp;
                    </span>
                </div>
            </Link>

            <div className='inline-flex items-center justify-between w-full -mt-10 max-sm:mt-0'>
                <SlideUpDiv delay={0} className='flex items-center text-2xl max-sm:text-xl'>
                    <p>
                    © 2023
                    </p>
                </SlideUpDiv>

                <SlideUpDiv delay={0} className='flex items-center text-md max-sm:text-xs'>
                    <p>
                        Inspired by <a href='https://pedromc.design/' target='_blank' className='underline hover:text-neutral-300'>Pedro</a>
                    </p>
                </SlideUpDiv>


                <SlideUpDiv delay={0} className='inline-flex items-center justify-end text-2xl max-sm:text-xl hover:cursor-pointer'>
                    Back to top&nbsp;
                    <ArrowUpIcon />
                </SlideUpDiv>
            </div>
        </div>
    )
}