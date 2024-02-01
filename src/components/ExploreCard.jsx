function ExploreCard() {
  return (
    <>
      <div className="max-w-screen-xl  mx-auto text-gray-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:grid-rows-2">
          {/* CARD 1 Start */}
          <div
            className="relative flex rounded-xl items-start justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/240x320")',
            }}
          >
            <div className="absolute rounded-xl  top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent opacity-30 from-gray-900 to-gray-900" />

            <div className="z-10 p-8 text-base">
              <h1 className=" font-serif pb-1">Mindfulness</h1>
              {/* <h1 className="text-5xl font-serif pb-1">Space</h1> */}
              <p>Autem sunt tempora mollitia magnam non voluptates</p>
            </div>
          </div>
          {/* CARD 1 END */}

          {/* CARD 2 Start */}

          <div
            className="relative flex items-end rounded-xl justify-end w-full bg-center bg-cover cursor-pointer h-96 md:col-span-2 group"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/random/245x320)",
            }}
          >
            <div className="absolute top-0 rounded-xl bottom-0 left-0 right-0 bg-gradient-to-b via-transparent opacity-30 from-gray-900 to-gray-900" />

            <div className="z-10 p-8 text-base text-right">
              <h1 className=" font-serif pb-1">Space</h1>
              {/* <h1 className="text-5xl font-serif pb-1">Space</h1> */}
              <p>Fuga ea ullam earum assumenda, beatae labore eligendi.</p>
            </div>
          </div>
          {/* CARD 2 END */}

          {/* CARD 3 Start */}

          <div
            className="relative flex rounded-xl items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/241x320")',
            }}
          >
            <div className="absolute top-0 rounded-xl bottom-0 left-0 right-0 bg-gradient-to-b via-transparent opacity-30 from-gray-900 to-gray-900" />

            <div className="z-10 p-8 text-base text-right ">
              <h1 className=" font-serif pb-1">Robotics</h1>
              {/* <h1 className="text-5xl font-serif pb-1">Space</h1> */}
              <p>Fuga ea ullam earum assumenda, beatae labore eligendi.</p>
            </div>
          </div>
          {/* CARD 3 END */}

          {/* CARD 4 Start */}

          <div
            className="relative rounded-xl flex items-start justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/242x320")',
            }}
          >
            <div className="absolute rounded-xl  top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent opacity-30 from-gray-900 to-gray-900" />

            <div className="z-10 p-8 text-base text-right">
              <h1 className=" font-serif pb-1">Minimalism</h1>
              {/* <h1 className="text-5xl font-serif pb-1">Space</h1> */}
              <p>Fuga ea ullam earum assumenda, beatae labore eligendi.</p>
            </div>
          </div>
          {/* CARD 4 END */}

          {/* CARD 5 Start */}
          <div
            className="relative flex rounded-xl items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/243x320")',
            }}
          >
            <div className="absolute top-0 rounded-xl bottom-0 left-0 right-0 bg-gradient-to-b via-transparent opacity-30 from-gray-900 to-gray-900" />

            <div className="z-10 p-8 text-base">
              <h1 className=" font-serif pb-1">Art</h1>
              {/* <h1 className="text-5xl font-serif pb-1">Space</h1> */}
              <p>
                Doloribus sit illo necessitatibus architecto exercitationem enim
              </p>
            </div>
          </div>
          {/* CARD 5 END */}
        </div>
      </div>
    </>
  );
}

export default ExploreCard;
