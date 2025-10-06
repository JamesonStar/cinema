import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

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
    <div className="min-h-screen bg-gray-900">
      <div className="m-8">
        {/* Profile header */}
        <div className="text-white w-auto bg-primary/30 p-8 rounded-lg flex items-center gap-6 shadow-md">
          {/* Avatar with user initial */}
          <div className="rounded-full h-40 w-40 bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center text-white font-bold text-5xl shadow-lg">
            {getInitial()}
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
          <button className="text-primary font-semibold hover:underline border-b-2 border-primary pb-1">
            Watching
          </button>
          <button className="text-gray-700 hover:text-primary hover:underline pb-1">
            Plan to Watch
          </button>
          <button className="text-gray-700 hover:text-primary hover:underline pb-1">
            Finished
          </button>
          <button className="text-gray-700 hover:text-primary hover:underline pb-1">
            Reviews
          </button>
        </div>

        {/* Content Section */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Card */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Watch Stats</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Movies Watched</span>
                <span className="font-bold text-primary">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Series Completed</span>
                <span className="font-bold text-primary">8</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Watchlist</span>
                <span className="font-bold text-primary">24</span>
              </div>
            </div>
          </div>

          {/* Recently Watched */}
          <div className="bg-white p-6 rounded-lg shadow md:col-span-2">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Recently Watched</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded">
                <div className="w-12 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Chainsaw Man</h4>
                  <p className="text-sm text-gray-600">Episode 12 • 2 days ago</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 hover:bg-gray-50 rounded">
                <div className="w-12 h-16 bg-gray-200 rounded flex-shrink-0"></div>
                <div>
                  <h4 className="font-medium text-gray-800">Spider-Man: No Way Home</h4>
                  <p className="text-sm text-gray-600">Movie • 1 week ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Account Information */}
        <div className="mt-6 bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Account Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <p className="mt-1 text-gray-900">{user.username}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <p className="mt-1 text-gray-900">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Account Type</label>
              <p className="mt-1 text-gray-900 capitalize">{user.role}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Member Since</label>
              <p className="mt-1 text-gray-900">
                {user.createdAt ? new Date(user.createdAt).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : 'N/A'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}