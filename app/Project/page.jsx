import Image from 'next/image'

export default function Project() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="items-center">
          <h1 className="text-3xl font-bold text-green-500">
            <a
              href="https://potato-market.vercel.app"
              className="text-3xl font-bold text-green-500"
            >
              Project : Potato Market
            </a>
          </h1>
          <p className="mb-4">Introcuce my team!</p>
        </div>
      </div>
      <section class="text-green-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-green-900">
                2023-2 WSP 기말 프로젝트
              </h1>
              <div class="h-1 w-20 bg-green-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-green-500">
              저희 팀은 WSP 기말고사 프로젝트로 Potato Market을 만들었습니다.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            <div class=" md:w-1/2 p-4">
              <div class="bg-green-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/product.png"
                  width={400}
                  height={300}
                  alt="content"
                />
                <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">
                  김평안
                </h3>
                <h2 class="text-lg text-green-900 font-medium title-font mb-4">
                  상품리스트 페이지
                </h2>
                <p class="leading-relaxed text-base">
                  Potato Market의 상품리스트 입니다.
                </p>
              </div>
            </div>
            <div class=" md:w-1/2 p-4">
              <div class="bg-green-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/community.png"
                  width={400}
                  height={300}
                  alt="content"
                />
                <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">
                  김건희
                </h3>
                <h2 class="text-lg text-green-900 font-medium title-font mb-4">
                  커뮤니티
                </h2>
                <p class="leading-relaxed text-base">
                  Potato Maket의 커뮤니티 입니다.
                </p>
              </div>
            </div>
            <div class=" md:w-1/2 p-4">
              <div class="bg-green-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/news.png"
                  width={400}
                  height={300}
                  alt="content"
                />
                <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">
                  신건훈
                </h3>
                <h2 class="text-lg text-green-900 font-medium title-font mb-4">
                  우리동네 뉴스
                </h2>
                <p class="leading-relaxed text-base">
                  Potato Market의 우리동네 뉴스 입니다.
                </p>
              </div>
            </div>
            <div class=" md:w-1/2 p-4">
              <div class="bg-green-100 p-6 rounded-lg">
                <Image
                  class="h-40 rounded w-full object-cover object-center mb-6"
                  src="/QnA.png"
                  width={400}
                  height={300}
                  alt="content"
                />
                <h3 class="tracking-widest text-green-500 text-xs font-medium title-font">
                  박준형
                </h3>
                <h2 class="text-lg text-green-900 font-medium title-font mb-4">
                  Q & A
                </h2>
                <p class="leading-relaxed text-base">Potato Market의 Q & A</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
