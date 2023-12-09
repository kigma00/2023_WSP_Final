export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center">
        <div className="items-center">
          <h1 className="text-3xl font-bold text-green-500">ABOUT ME</h1>
          <p className="mb-4">Introduce about me!</p>
        </div>
      </div>

      <section class="text-gray-600 body-font">
        <div class="container px-5 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -m-4">
            <div class="p-4  md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-10 h-10"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    Goranie
                  </h2>
                  <p class="leading-relaxed text-base">
                    중부대학교를 재학 중이며 정보보호에 관해서 공부하는
                    사람입니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="p-4  md:w-full">
              <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                <div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-green-100 text-green-500 flex-shrink-0">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-8 h-8"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div class="flex-grow">
                  <h2 class="text-gray-900 text-lg title-font font-medium mb-3">
                    중부대학교 20학번으로 정보보호학전공 입니다.
                  </h2>
                  <p class="leading-relaxed text-base ">
                    정보보호 관련해서는 리버싱과 개발 쪽으로 관심이 있고, 현재
                    외부 활동을 주로 하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div class="flex items-center  mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 className="text-gray-900  text-lg title-font font-bold mb-2">
                  보유 자격증
                </h2>
                <p class="leading-relaxed text-base">네트워크관리사 2급</p>
                <p class="leading-relaxed text-base">침해사고대응전문가</p>
              </div>
            </div>
            <div class="flex items-center mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-bold mb-2">
                  프로젝트
                </h2>
                <p class="leading-relaxed text-base">2023 웹프로그래밍</p>
                <p class="leading-relaxed text-base">2023 악성코드 정적분석</p>
              </div>
            </div>

            <div class="flex items-center mx-auto sm:flex-row flex-col">
              <div class="flex-grow sm:text-left text-center mt-6 sm:mt-0">
                <h2 class="text-gray-900 text-lg title-font font-bold mb-2">
                  보안을 공부하기 위해?
                </h2>

                <p class="leading-relaxed text-base">
                  저의 경우 대학 때 처음으로 보안을 접하였기에 최대한 보안에
                  관해 많이 알고자 하였고, 군대라는 시간을 낭비하기 싫어 보안에
                  관한 보직으로 정보보호병을 선택하여 지원하였으며, 군대를
                  전역한 후에는 복학 전까지 개인적으로 공부를 하는 시간을 갖고,
                  복학 후에도 내·외부적인 활동들을 참여하면서 보안에 적극 시간을
                  보내고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
