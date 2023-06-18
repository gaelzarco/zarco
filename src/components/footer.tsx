import Link from "next/link";
import { Link as SmoothScrollLink } from "react-scroll";
import { ArrowUpIcon } from "@radix-ui/react-icons";

export default function Footer() {
  return (
    <div className="bottom-0 flex flex-col w-full mt-6 max-sm:-mt-6">
      <Link
        href="mailto:gaelxarco@icloud.com"
        target="_blank"
        className="container h-[100px] max-sm:h-[45px] bg-neutral-900/10 min-w-full text-8xl border border-white rounded-lg max-sm:rounded-md max-sm:text-5xl mt-32 hover:bg-white hover:text-black cursor-pointer max-lg:mt-8"
      >
        <div className="scroll">
          <div className="right2left">
            <p>
              {" "}
              Let&apos;s Talk ✧ Let&apos;s Talk ✧ Let&apos;s Talk ✧ Let&apos;s
              Talk ✧ Let&apos;s Talk ✧
            </p>
            <p>
              {" "}
              Let&apos;s Talk ✧ Let&apos;s Talk ✧ Let&apos;s Talk ✧ Let&apos;s
              Talk ✧ Let&apos;s Talk ✧
            </p>
          </div>
        </div>
      </Link>

      <div className="inline-flex items-center justify-between w-full -mt-10 max-sm:mt-0">
        <div className="flex items-center text-2xl max-sm:text-xl">
          <p>© 2023</p>
        </div>

        {/* <div className='flex items-center text-2xl max-sm:text-xl'>
                    <p>
                       <a href='https://www.awwwards.com/sites/pedro-matos-chaves-design' target='_blank' className='hover:text-neutral-300'>Special Thanks</a>
                    </p>
                </div> */}

        <SmoothScrollLink
          to="hero"
          smooth={true}
          duration={1000}
          offset={-100}
          className="inline-flex items-center justify-end text-2xl max-sm:text-xl hover:cursor-pointer"
        >
          Back to top&nbsp;
          <ArrowUpIcon style={{ scale: "1.5" }} />
        </SmoothScrollLink>
      </div>
    </div>
  );
}
