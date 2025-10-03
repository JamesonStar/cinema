export default function ProfilePage() {
  return (
    <div className="m-8">
      {/* Profile header */}
      <div className="text-white w-auto bg-primary/30 p-8 rounded-lg flex items-center gap-6 shadow-md">
        {/* Avatar */}
        <div className="rounded-full h-40 w-40 bg-white flex items-center justify-center text-primary font-bold text-3xl shadow">
          {/* You can replace this with an <img src="..." /> later */}U
        </div>

        {/* User Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold">Username</h1>
          <p className="text-gray-200 mt-1">This is a short bio...</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white w-auto mt-4 p-4 rounded-lg flex flex-row gap-6 shadow">
        <button className="text-primary font-semibold hover:underline">
          Watching
        </button>
        <button className="text-gray-700 hover:text-primary hover:underline">
          Plan to Watch
        </button>
        <button className="text-gray-700 hover:text-primary hover:underline">
          Finished
        </button>
      </div>
      <div className="bg-white rounded-lg w-fit mt-4">
        <img
          src="https://via.placeholder.com/150x225?text=Movie+Poster"
          alt="Movie Poster"
          className="w-72 h-88 object-cover rounded-t-lg"
        />
        <div className="pl-2 font-bold text-2xl">Movie</div>
        <div className="p-2 text-gray-600">Description of the movie...</div>
      </div>
    </div>
  );
}
