import {getProviderIconFromCurrentUser, getStyledUsernameFromCurrentUser} from "./helpers.jsx";

const UserAccount = ({ currentUser, logOut }) => {
    return (
        <div
            className={`my-auto flex w-full sm:w-auto flex-row items-center justify-between gap-x-16 rounded-md border border-gray-400 p-2 ${
                currentUser?.username ? 'sm:gap-x-4' : 'sm:gap-x-2'
            }`}
        >
            <div className="flex flex-row items-center gap-x-2">
                {getProviderIconFromCurrentUser(currentUser)}
                {getStyledUsernameFromCurrentUser(currentUser) || <></>}
            </div>
            <button
                className="text-[12px] font-light text-gray-400 hover:text-red-1200"
                onClick={logOut}
            >
                Logout
            </button>
        </div>
    )
}
export default UserAccount
