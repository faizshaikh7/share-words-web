function ExploreCard() {
  return (
    <>
      <div className="max-w-screen-xl  mx-auto text-gray-100">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:grid-rows-2">
          {/* CARD 1 Start */}
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/240x320")',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />

            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                {" "}
                Autem sunt tempora mollitia magnam non voluptates
              </a>
            </h2>
          </div>
          {/* CARD 1 END */}

          {/* CARD 2 Start */}

          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 md:col-span-2 group"
            style={{
              backgroundImage:
                "url(https://source.unsplash.com/random/245x320)",
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />

            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline lg:text-2xl lg:font-semibold text-gray-100"
              >
                Fuga ea ullam earum assumenda, beatae labore eligendi.
              </a>
            </h2>
          </div>
          {/* CARD 2 END */}

          {/* CARD 3 Start */}

          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/241x320")',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />

            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                Inventore reiciendis aliquam excepturi
              </a>
            </h2>
          </div>
          {/* CARD 3 END */}

          {/* CARD 4 Start */}

          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/242x320")',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />

            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                Officiis mollitia dignissimos commodi optio vero animi
              </a>
            </h2>
          </div>
          {/* CARD 4 END */}

          {/* CARD 5 Start */}
          <div
            className="relative flex items-end justify-start w-full text-left bg-center bg-cover cursor-pointer h-96 group bg-gray-500"
            style={{
              backgroundImage:
                'url("https://source.unsplash.com/random/243x320")',
            }}
          >
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b via-transparent from-gray-900 to-gray-900" />
            <h2 className="z-10 p-5">
              <a
                rel="noopener noreferrer"
                href="#"
                className="font-medium text-md group-hover:underline text-gray-100"
              >
                Doloribus sit illo necessitatibus architecto exercitationem enim
              </a>
            </h2>
          </div>
          {/* CARD 5 END */}
        </div>
      </div>
    </>
  );
}

export default ExploreCard;
