import { Icon } from "../index.js";

export const trimAddress = (address) => {
    if (typeof address !== 'string') return ''
    return address.substring(0, 5) + '...' + address.substring(38, 42)
}

export function getStyledUsernameFromCurrentUser(currentUser, sizeVariant) {
    if (!currentUser?.id) {
        return ''
    }
    switch (currentUser.id.split('-')[0].toLowerCase()) {
        case 'discord':
            return (
                <div className={`flex text-[#5865F2] ${sizeVariant || 'text-[12px]'}`}>
                    <div>{currentUser?.username}</div>
                </div>
            )
        case 'google':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-gray-2000">{currentUser?.username}</div>
                </div>
            )
        case 'chess':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-gray-2000">{currentUser?.username}</div>
                </div>
            )
        case 'twitter':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-[#1DA1F2]">{currentUser?.username}</div>
                </div>
            )
        case 'twitch':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-[#9146FF]">{currentUser?.username}</div>
                </div>
            )
        case 'epic_games':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-[#2F2D2E]">{currentUser?.username}</div>
                </div>)
        case 'reddit':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-[#FF4500]">{currentUser?.username}</div>
                </div>
            )
        case 'facebook':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-[#3B5998]">{currentUser?.username}</div>
                </div>
            )
        case 'microsoft':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-[#2F2D2E]">{currentUser?.username}</div>
                </div>
            )
        default:
            return (
                <div className={`flex text-gray-2000 ${sizeVariant || 'text-[12px]'}`}>
                    {currentUser?.username}
                </div>
            )
    }
}

export function getProviderIconFromCurrentUser(currentUser) {
    if (!currentUser?.id) {
        return <></>
    }
    switch (currentUser.id.split('-')[0].toLowerCase()) {
        case 'discord':
            return (
                <div className="mt-0.5 flex">
                    <Icon height="9.75" width="12" name="discord" />
                </div>
            )
        case 'google':
            return (
                <div className="flex">
                    <Icon height="9.75" width="12" name="google" />
                </div>
            )
        case 'chess':
            return (
                <div className="flex">
                    <Icon height="9.75" width="12" name="chess_pawn" />
                </div>
            )
        case 'twitter':
            return (
                <div className="flex">
                    <Icon height="9.75" width="12" name="twitter" />
                </div>
            )
        case 'twitch':
            return (
                <div className="flex">
                    <Icon height="9.75" width="12" name="twitch_logo_purple" />
                </div>
            )
        case 'node_oidc':
            return (
                <div className="flex">
                    <Icon height="9.75" width="12" name="keypcircle" />
                </div>
            )
        case 'epic_games':
            return (
                <div className="flex">
                    <Icon height="9.75" width="12" name="epic_games" />
                </div>)
        case 'reddit':
            return (
                <div className="flex mt-0.5">
                    <Icon height="9.75" width="12" name="reddit" />
                </div>)
        case 'facebook':
            return (
                <div className="flex mt-0.5">
                    <Icon height="9.75" width="12" name="facebook" />
                </div>)
        case 'microsoft':
            return (
                <div className="flex mt-0.5">
                    <Icon height="9.75" width="12" name="microsoft" />
                </div>)
        default:
            return <></>
    }
}
