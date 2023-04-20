import Project from "@/components/project"

export default function Home() {

  return (
      <div className='flex flex-col items-center content-center justify-center p-4 pt-16 w-full max-w-5xl text-left'>
        <div id="about" className='flex flex-col w-10/12 max-md:w-full mx-auto pb-4'>
          <h1 className='font-bold text-md leading-10 hover:text-neutral-800 dark:hover:text-neutral-300 py-2'>
            My work and experience
          </h1>
          <p className='text-sm'>
          I'm Gael Zarco- a former restaurant industry professional turned Full-Stack Engineer from Las Vegas. I create fast, responsive, and accessible web applications using 
          {' '}<code>TypeScript</code>,
          {' '}<code>React</code>,
          {' '}<code>NextJS</code>,
          {' '}<code>NodeJS</code>,
          and
          {' '}<code>TailwindCSS</code>. I'm currently looking for a full-time position as an entry-level Software Engineer.
          </p>
        </div>
        <Project title="Briefo" 
        image1="/static/briefo-x1_so.png" image2="/static/briefo-x2_so.png" image3="/static/briefo-x3_so.png"
        github='https://github.com/gaelzarco/ai-creative-assistant' vercel='https://ai-creative-assistant.vercel.app/'>
          <p>
          LabLabAI - OpenAI Stack Hackathon submission. A web application that allows users to create briefs for creative projects and export/download them to a stlyed PDF document. Built with React, OpenAI's GPT-3 Davinci text completion model, and Flask. Received overwhelming positive feedback from start-up founders and engineering students. Presentational video can be found{' '}
            <a href="https://www.youtube.com/watch?v=zP22qaE0Rd0" target="_blank" rel="noreferrer" className="underline hover:text-neutral-800 dark:hover:text-neutral-300">
              here
            </a>.
          </p>
        </Project>
        <Project title="Moxie" 
        image1="/static/moxie-x1_so.png" image2="/static/moxie-x2_so.png" image3="/static/moxie-x3_so.png"
        github="https://github.com/gaelzarco/moxie" vercel="https://moxie-x.vercel.app/">
          <p>
          A serverless social media website with a focus on interactivity and polish. Built with TypeScript, NextJS, TailwindCSS, Radix UI, tRPC, PlanetScale, AWS S3, and Clerk for user authenication/management. Features a fully functional user feed, comments, likes, and more. Sign-up, log in and make your first post.
          </p>
        </Project>
        <Project title="Audix" 
        image1="/static/audix-x1_so.png" image2="/static/audix-x2_so.png" image3="/static/audix-x3_so.png"
        github='https://github.com/gaelzarco/audix'vercel='https://audix.vercel.app/'>
          <p>
          Inspired by Receiptify. Allows users to generate a "STATIC" to download and share their top tracks from Spotify with the world. Crafted utilizing React, NodeJS, Express, Flask and features Spotify Web API integration.
          </p>
        </Project>
      </div>
  )
}

// <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
//   <Image
//     className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
//     src="/next.svg"
//     alt="Next.js Logo"
//     width={180}
//     height={37}
//     priority
//   />
// </div>