import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-50 via-cyan-50 to-white min-h-screen pt-20">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 h-[80vh] items-center">

        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-snug">
            The Best <span className="text-blue-600">URL Shortener</span> in the Market
          </h1>
          <p className="text-gray-600 text-lg md:pr-16">
            We provide the most straightforward and easy-to-use URL shortening service. 
            Unlike others, we don&apos;t track you or force logins. 
            Your privacy matters, and that&apos;s why we built <span className="font-semibold text-teal-600">BitLinks</span>.
          </p>

          <div className="flex gap-4">
            <Link href="/shorten">
              <button className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition-all cursor-pointer">
                Try Now
              </button>
            </Link>
            <Link href="https://github.com/Debanjan83" target="_blank">
              <button className="px-6 py-3 rounded-xl bg-teal-500 text-white font-semibold shadow-md hover:bg-teal-600 transition-all cursor-pointer">
                GitHub
              </button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center relative">
          <Image
            className="rounded-lg shadow-lg object-contain"
            src="/vector.jpg"
            alt="Vector Illustration"
            width={500}
            height={500}
            priority
          />
        </div>
      </section>
    </main>
  )
}
