import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="items-center">
          <h1 className="text-3xl font-bold text-green-500">
            Welcome To Goranie
          </h1>
          <p className="mb4 ">How to contect me!</p>
        </div>
      </div>

      <div className="flex ">
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src=""
              alt="card image"
            />
            <div className="text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://github.com/kigma00/kigma00">Github</Link>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src=""
              alt="card image"
            />
            <div className="text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://www.notion.so/d71746b790d74ced9d89d4dd7a24aa6a?pvs=4">
                Notion
              </Link>
            </div>
          </div>
        </div>

        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src=""
              alt="card image"
            />
            <div className="text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://hi-bald-person.tistory.com/">Tistory</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
