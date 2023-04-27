import { motion } from 'framer-motion'

import Project from "@/components/project"

export default function Projects() {
    return (
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1 }} 
    transition={{ duration: 0.75, ease: 'easeInOut' }}
    >
        <Project title="Briefo" 
        image1="/static/briefo-x1_so.png" image2="/static/briefo-x2_so.png" image3="/static/briefo-x3_so.png"
        github='https://github.com/gaelzarco/ai-creative-assistant' vercel='https://ai-creative-assistant.vercel.app/'>
        <p>
        LabLabAI - OpenAI Stack Hackathon submission. A web application that allows users to create briefs for creative projects and export/download them to a stlyed PDF document. Built with <code>React</code>, <code>OpenAI&apos;s GPT-3 Davinci text-completion model</code>, and <code>Flask</code>. Received overwhelming positive feedback from start-up founders and engineering students. Presentational video can be found <a href="https://www.youtube.com/watch?v=zP22qaE0Rd0" target="_blank" rel="noreferrer" className="underline hover:text-neutral-800 dark:hover:text-neutral-300"> here</a>.
        </p>
        </Project>
        <Project title="Moxie" 
        image1="/static/moxie-x1_so.png" image2="/static/moxie-x2_so.png" image3="/static/moxie-x3_so.png"
        github="https://github.com/gaelzarco/moxie" vercel="https://moxie-x.vercel.app/">
        <p>
        A serverless social media website with a focus on interactivity and polish. Built with <code>TypeScript</code>, <code>NextJS</code>, <code>TailwindCSS</code>, <code>RadixUI</code>, <code>tRPC</code>, <code>Prisma ORM</code>, <code>PlanetScale</code>, and <code>Clerk</code> for user authenication/management. Features a fully functional user feed, comments, likes, and more. Sign-up, log in and make your first post. You can always delete it later. 🚀
        </p>
        </Project>
        <Project title="Audix" 
        image1="/static/audix-x1_so.png" image2="/static/audix-x2_so.png" image3="/static/audix-x3_so.png"
        github='https://github.com/gaelzarco/audix'vercel='https://audix.vercel.app/'>
        <p>
        Inspired by Receiptify. Allows users to generate a &apos;STATIC&apos; (image of their top Spotify tracks from a user-selected timeframe) to download and share with the world. Crafted utilizing  <code>React</code>, <code>NodeJS</code>, <code>Express</code>, <code>Flask</code>, and features <code>Spotify Web API</code> integration.
        </p>
        </Project>
    </motion.div>
    )
}