function FeaturedCard() {
  return (
    <>
      <div className=" text-start max-w-sm rounded-xl overflow-hidden shadow-lg cursor-pointer ">
        <img
          className="w-full rounded-3xl py-4 px-4"
          src="https://source.unsplash.com/random/480x320?1"
          alt="Image"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>

          <div className=" flex items-center py-4 align-">
            <img
              alt=""
              className="w-10 h-10 rounded-full p-0.5 border border-dashed border-blue-700"
              src="https://source.unsplash.com/40x40/?portrait?1"
            />

            <p className="pr-3 text-xs pl-3 text-gray-400">MOHAMED FAIZ</p>
            <p className="text-sm text-gray-400">5 minute read</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FeaturedCard;
