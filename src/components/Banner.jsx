

const Banner = () => {
  return (
    <div className="py-16 text-center">

      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-800">
        Friends to keep close in your life
      </h1>

      {/* Subtitle */}
      <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
        Your personal shelf of meaningful connections. Browse, tend, and nurture the
      <br></br>relationships that matter most.
      </p>

      {/* Button */}
      <button className="btn btn-primary mt-6">
        
        <a className="text-2xl">+</a>Add a Friend
      </button>
      {/* Summary Cards */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

  <div className="bg-white shadow-md rounded-2xl p-6">
    <h2 className="text-3xl font-bold [#244D3F]">10</h2>
    <p className="text-gray-500 mt-2">Total Friends</p>
  </div>
  <div className="bg-white shadow-md rounded-2xl p-6">
    <h2 className="text-3xl font-bold [#244D3F]">3</h2>
    <p className="text-gray-500 mt-2">On Track</p>
  </div>

  <div className="bg-white shadow-md rounded-2xl p-6">
    <h2 className="text-3xl font-bold [#244D3F]">6</h2>
    <p className="text-gray-500 mt-2">Need Attention</p>
  </div>

  <div className="bg-white shadow-md rounded-2xl p-6">
    <h2 className="text-3xl font-bold [#244D3F]">12</h2>
    <p className="text-gray-500 mt-2">Interactions This Month</p>
  </div>

  

</div>

    </div>
  );
};

export default Banner;