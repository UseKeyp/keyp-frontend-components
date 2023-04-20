```jsx
import Icon from '../Icon/Icon';

function onSubmitSignUp(provider) {
    console.log(provider);
}

const loading = false;

<div className="flex flex-col justify-center">
    <div className="flex flex-col gap-y-4 items-start sm:items-center">
        <div className="flex flex-col w-full sm:w-[320px]">
            <div className="text-[16px] font-light text-gray-1600 pb-4">
                Log In or Sign Up
            </div>
            <Button
                onClick={() => onSubmitSignUp('DISCORD')}
                disabled={loading === 'DISCORD'}
                classNameVariant={`${
                    loading === 'DISCORD'
                        ? 'bg-[#5865F2] border-[#5865F2] sm:w-[320px]'
                        : 'hover:bg-[#5865F2] hover:border-[#5865F2] sm:w-[320px]'
                }`}
                borderColor="border-[#E5E7EB]"
                fluid={true}
                position="start"
                alt="discord"
            >
                <div className="group flex flex-row gap-x-4 hover:text-white">
                    <div className="flex pl-2">
                        <Icon height="24" width="24" name="discord" />
                    </div>
                    <div
                        className={`${
                            loading === 'DISCORD'
                                ? 'flex font-light text-white'
                                : 'flex font-light text-gray-1200 group-hover:text-white'
                        }`}
                    >
                        {' '}
                        Discord
                    </div>
                </div>
            </Button>
        </div>
        <Button
            onClick={() => onSubmitSignUp('GOOGLE')}
            disabled={loading === 'GOOGLE'}
            classNameVariant={`${
                loading === 'GOOGLE'
                    ? 'bg-[#4285F4] border-[#4285F4] sm:w-[320px]'
                    : 'hover:bg-[#4285F4] hover:border-[#4285F4] sm:w-[320px]'
            }`}
            borderColor="border-[#E5E7EB]"
            fluid={true}
            position="start"
            alt="google"
        >
            <div
                className={`${
                    loading === 'GOOGLE'
                        ? 'group flex flex-row items-center gap-x-6 text-white sm:gap-x-4'
                        : 'group flex flex-row items-center gap-x-6 hover:text-white sm:gap-x-4'
                }`}
            >
                <div className="flex pl-1.5">
                    <Icon height="24" name="google" />
                </div>
                <div
                    className={`${
                        loading === 'GOOGLE'
                            ? 'flex font-light text-white'
                            : 'flex font-light text-gray-1200 group-hover:text-white'
                    }`}
                >
                    {' '}
                    Google
                </div>
            </div>
        </Button>
        <Button
            onClick={() => onSubmitSignUp('TWITTER')}
            disabled={loading === 'TWITTER'}
            classNameVariant={`${
                loading === 'TWITTER'
                    ? 'bg-[#4285F4] border-[#4285F4] sm:w-[320px]'
                    : 'hover:bg-[#4285F4] hover:border-[#4285F4] sm:w-[320px]'
            }`}
            borderColor="border-[#E5E7EB]"
            fluid={true}
            position="start"
            alt="twitter"
        >
            <div className="group flex flex-row items-center gap-x-6 hover:text-white sm:gap-x-4">
                <div className="flex pl-2">
                    <Icon height="24" name="twitter" />
                </div>
                <div
                    className={`${
                        loading === 'TWITTER'
                            ? 'flex font-light text-white'
                            : 'flex font-light text-gray-1200 group-hover:text-white'
                    }`}
                >
                    {' '}
                    Twitter
                </div>
            </div>
        </Button>
        <Button
            onClick={() => onSubmitSignUp('CHESS')}
            disabled={loading === 'CHESS'}
            classNameVariant={`${
                loading === 'CHESS'
                    ? 'bg-[#6c9d41] border-[#6c9d41] justify-center'
                    : 'hover:bg-[#6c9d41] hover:border-[#6c9d41] justify-center'
            }`}
            borderColor="border-[#E5E7EB]"
            size="square"
            fluid={false}
            position="start"
            alt="chess"
        >
            <div
                className={`${
                    loading === 'CHESS'
                        ? 'group flex flex-row items-center text-white'
                        : 'group flex flex-row items-center hover:text-white'
                }`}
            >
                <div className="flex">
                    <Icon
                        height="24"
                        width="24"
                        name="chess_pawn"
                    />
                </div>
            </div>
        </Button>
        <Button
            onClick={() => onSubmitSignUp('TWITCH')}
            disabled={loading === 'TWITCH'}
            classNameVariant={`${
                loading === 'TWITCH'
                    ? 'bg-[#5865F2] border-[#5865F2] justify-center'
                    : 'hover:bg-[#5865F2] hover:border-[#5865F2] justify-center'
            }`}
            borderColor="border-[#E5E7EB]"
            fluid={false}
            size="square"
            position="start"
            alt="discord"
        >
            <div className="group flex flex-row gap-x-4 hover:text-white">
                <div className="flex">
                    <Icon
                        height="24"
                        width="24"
                        name="twitch_logo_purple"
                    />
                </div>
            </div>
        </Button>
        <Button
            onClick={() => onSubmitSignUp('REDDIT')}
            disabled={loading === 'REDDIT'}
            classNameVariant={`${
                loading === 'REDDIT'
                    ? 'bg-[#E9EBED] border-[#E9EBED] justify-center'
                    : 'hover:bg-[#E9EBED] hover:border-[#E9EBED] justify-center'
            }`}
            borderColor="border-[#E5E7EB]"
            fluid={false}
            size="square"
            position="start"
            alt="reddit"
        >
            <div className="group flex flex-row gap-x-4 hover:text-white">
                <div className="flex">
                    <Icon
                        height="24"
                        width="24"
                        name="reddit"
                    />
                </div>
            </div>
        </Button>
        <Button
            onClick={() => onSubmitSignUp('TELEGRAM')}
            disabled={loading === 'TELEGRAM'}
            classNameVariant={`${
                loading === 'TELEGRAM'
                    ? 'bg-[#E9EBED] border-[#E9EBED] justify-center'
                    : 'hover:bg-[#E9EBED] hover:border-[#E9EBED] justify-center'
            }`}
            borderColor="border-[#E5E7EB]"
            fluid={false}
            size="square"
            position="start"
            alt="telegram"
        >
            <div className="group flex flex-row gap-x-4 hover:text-white">
                <div className="flex">
                    <Icon
                        height="24"
                        width="24"
                        name="telegram"
                    />
                </div>
            </div>
        </Button>
        <Button
            onClick={() => onSubmitSignUp('MICROSOFT')}
            disabled={loading === 'MICROSOFT'}
            classNameVariant={`${
                loading === 'MICROSOFT'
                    ? 'bg-[#E9EBED] border-[#E9EBED] justify-center'
                    : 'hover:bg-[#E9EBED] hover:border-[#E9EBED] justify-center'
            }`}
            borderColor="border-[#E5E7EB]"
            fluid={false}
            size="square"
            position="start"
            alt="microsoft"
        >
            <div className="group flex flex-row gap-x-4 hover:text-white">
                <div className="flex">
                    <Icon
                        height="24"
                        width="24"
                        name="microsoft"
                    />
                </div>
            </div>
        </Button>
        </div>
</div>
```