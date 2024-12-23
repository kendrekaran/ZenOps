'use client'

import Image from "next/image"
import { LineChart, Line, ResponsiveContainer } from "recharts"
import { motion } from "framer-motion"
import { Target } from "lucide-react"

const data = [
  { value: 40000 },
  { value: 35000 },
  { value: 45000 },
  { value: 55000 },
  { value: 35000 },
  { value: 40000 },
  { value: 45000 },
  { value: 35000 },
  { value: 50000 },
]

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
}

export default function SeoDashboard() {
  return (
    <div id="dash" className="w-full bg-black min-h-screen sm:py-20 py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <motion.div 
          className="text-center space-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-5xl font-bold text-white max-w-3xl mx-auto leading-tight">
            Harness the power of AI, making search engine optimization intuitive and effective for all skill levels.
          </h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* SEO Goal Setting Card */}
          <motion.div 
            className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            transition={{ duration: 0.5 }}
          >
            <div className="w-24 h-16 relative">
            <div >
              <Target className="text-purple-500"/>
            </div>

            </div>
            <h2 className="text-2xl font-bold text-white">SEO Goal Setting</h2>
            <p className="text-zinc-400">
              Helps you set and achieve SEO goals with guided assistance.
            </p>
          </motion.div>

          {/* Dashboard Card */}
          <motion.div 
            className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 space-y-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Visibility</span>
                <div>
                  <span className="text-2xl font-bold text-white">10.15%</span>
                  <span className="text-green-500 ml-1">+5.6%</span>
                </div>
              </div>
              <div className="h-[100px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">User-friendly dashboard</h2>
            <p className="text-zinc-400">
              Perform complex SEO audits and optimizations with a single click.
            </p>
          </motion.div>

          {/* Visual Reports Card */}
          <motion.div 
            className="rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-950 p-6 space-y-4 md:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInScale}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="space-y-4">
              <div className="flex justify-between items-baseline">
                <span className="text-zinc-400">Traffic</span>
                <div>
                  <span className="text-2xl font-bold text-white">59.8K</span>
                  <span className="text-green-500 ml-1">+10.7%</span>
                </div>
              </div>
              <div className="h-[200px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#8b5cf6"
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white">Visual reports</h2>
            <p className="text-zinc-400">
              Visual insights into your site's performance.
            </p>
          </motion.div>


        </div>
      </div>
    </div>
  )
}

