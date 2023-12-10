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
              src="data:image/png;base64,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"
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
              src="data:image/png;base64,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"
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
              src="data:image/png;base64,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"
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
