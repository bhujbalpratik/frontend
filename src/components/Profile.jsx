import { useAuth } from "../contexts/AuthContext"
import Loader from "./Loader"

export const Profile = () => {
  const { user, loading } = useAuth()
  return loading ? (
    <Loader />
  ) : (
    <div className="p-3 max-w-lg mx-auto text-white">
      <h1 className="text-3xl text-center font-semibold my-7">Profile</h1>
      <div className="flex flex-col gap-6">
        <label className="ml-1">Username</label>
        <input
          type="text"
          id="email"
          value={user?.username}
          className="bg-white/20 p-3 rounded-lg"
          required
          readOnly
        />

        <label className="ml-1">Email</label>
        <input
          type="text"
          id="password"
          value={user?.email}
          className="bg-white/20 p-3 rounded-lg"
          required
          readOnly
        />
      </div>
    </div>
  )
}
