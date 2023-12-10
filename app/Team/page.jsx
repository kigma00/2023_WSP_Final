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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4zwV8AcEf0e85kw3Vt6aJQ7vtxXWfLloug&usqp=CAU"
              alt="card image"
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://github.com/kigma00/kigma00">김건희</Link>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4zwV8AcEf0e85kw3Vt6aJQ7vtxXWfLloug&usqp=CAU"
              alt="card image"
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://github.com/kigma00/kigma00">김평안</Link>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4zwV8AcEf0e85kw3Vt6aJQ7vtxXWfLloug&usqp=CAU"
              alt="card image"
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://github.com/kigma00/kigma00">박준형</Link>
            </div>
          </div>
        </div>
        <div className="p-4 sm:w-1/2 lg:w-1/3">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <Image
              className="lg:h-72 md:h-48 w-full object-cover object-center"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-4zwV8AcEf0e85kw3Vt6aJQ7vtxXWfLloug&usqp=CAU"
              alt="card image"
            />
            <div className="font-bold text-center p-6 hover:bg-green-600 hover:text-white transition duration-300 ease-in">
              <Link href="https://github.com/kigma00/kigma00">신건훈</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
