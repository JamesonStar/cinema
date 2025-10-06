import FilmCard from "../components/FilmCard";

const sortedSeries = [
  {
    id: 1,
    category: "Series",
    title: "Bleach: Thousand-Year Blood War",
    desc: "The final arc of Bleach, featuring epic battles against powerful enemies.",
    poster: "./src/assets/img/posters/Bleach_Thousand-Year_Blood_War.png",
    list: "watching",
  },
];

const genre = [
  { id: "watching", name: "Watching" },
  { id: "plan", name: "Plan to Watch" },
  { id: "finished", name: "Finished" },
];

export default function ProfilePage() {
  const { user, loading } = useAuth();

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white">Loading...</div>
      </div>
    );
  }

  // Redirect to login if not authenticated
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // Get initial for avatar
  const getInitial = () => {
    return user.username ? user.username.charAt(0).toUpperCase() : 'U';
  };

  return (
    <div className="container">
      {/* Profile header */}
      <div className="relative text-white w-auto bg-primary/30 p-8 rounded-lg flex items-center gap-6 shadow-md">
        {/* Edit Button */}
        <button className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg text-sm font-semibold transition">
          Edit Profile
        </button>

        {/* Avatar */}
        <div className="rounded-full h-40 w-40 bg-white flex items-center justify-center text-primary font-bold text-3xl shadow">
          {/* You can replace this with an <img src="..." /> later */}U
        </div>

          {/* User Info */}
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold">{user.username}</h1>
            <p className="text-gray-200 mt-1">{user.email}</p>
            <div className="flex items-center gap-4 mt-3">
              <span className="px-3 py-1 bg-yellow-600 text-white text-sm rounded-full capitalize">
                {user.role}
              </span>
              <span className="text-gray-300 text-sm">
                Member since {new Date(user.createdAt).toLocaleDateString('id-ID')}
              </span>
            </div>
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
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8 xl:grid-cols-5 mt-5">
        {sortedSeries.map((serie) => (
          <FilmCard key={serie.id} {...serie} />
        ))}
      </div>
    </div>
  );
}