import "./App.css";
import ExploreCard from "./components/ExploreCard";
import FeaturedCard from "./components/FeaturedCard";
import Header from "./components/Header";
// import PageView from "./components/PageView";

function App() {
  return (
    <>
      {/* add header */}
      <Header />

      <div className="container pt-14 mx-auto space-y-8">
        <div className="text-start cursor-pointer gap-3 mx-auto max-w-full group grid grid-cols-12">
          <img
            src="https://source.unsplash.com/random/480x360"
            alt=""
            className="object-cover w-full h-64 rounded-lg sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />

          <div className="p-2 space-y-2 lg:col-span-5">
            <h5 className="text-blue-500 font-bold">
              TECHNOLOGY AND INNOVATION
            </h5>
            <h3 className="text-2xl font-semibold sm:text-4xl">
              Thriving in the new normal: How technology paves the way forward
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              repellendus. Ipsa animi expedita atque magnam maiores veritatis
              nisi velit libero, necessitatibus inventore consequuntur
              voluptates in ex? Distinctio natus deleniti expedita quaerat,
              temporibus enim iure aut.
            </p>

            <div className=" flex items-center py-4 align-">
              <img
                alt=""
                className="w-12 h-12 rounded-full p-0.5 border border-dashed border-blue-700"
                src="https://source.unsplash.com/40x40/?portrait?1"
              />

              <p className="pr-3 text-sm pl-3 text-gray-400">MOHAMED FAIZ</p>
              <p className="text-sm text-gray-400">5 minute read</p>
            </div>
          </div>
        </div>

        {/* Featured */}
        <div className="text-start text-4xl font-sans">Featured</div>

        <div className="grid justify-center pb-6 gap-11 sm:grid-cols-2 lg:grid-cols-3">
          <FeaturedCard />
          <FeaturedCard />
          <FeaturedCard />
        </div>

        <span className="text-blue-600 font-medium text-xl bg-transparent border-none cursor-pointer">
          Read More
        </span>

        {/* Explore */}
        <div className="text-start text-4xl font-sans ">Explore</div>

        <div className="flex row pb-6 ">
          <ExploreCard />
        </div>

        <span className="text-blue-600 font-medium text-xl bg-transparent border-none cursor-pointer ">
          Explore More
        </span>
      </div>
    </>
  );
}

export default App;
