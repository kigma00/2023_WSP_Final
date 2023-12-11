import Link from 'next/link'
import Image from 'next/image'

export default function Team() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="items-center">
          <h1 className="text-green-500 text-3xl font-bold">Team Potato</h1>
          <p className="mb-4">Introduce my Team!</p>
        </div>
      </div>

      <div className="flex">
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="/human.png"
              alt="card image"
              width={300}
              height={300}
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://2023-wsp-final.vercel.app">김건희</Link>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="/human.png"
              alt="card image"
              width={300}
              height={300}
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://introduce1.vercel.app/">김평안</Link>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="/human.png"
              alt="card image"
              width={300}
              height={300}
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://joon-hyeong-portfolio.vercel.app/">
                박준형
              </Link>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="/human.png"
              alt="card image"
              width={300}
              height={300}
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://portpolio1.vercel.app/">신건훈</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
