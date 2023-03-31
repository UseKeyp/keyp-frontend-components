```jsx
import Button from '../Button/Button';
import Icon from '../Icon/Icon';

const loading = false;

<MoreAccordion title="More">
    <div className="flex gap-x-2 pl-3">
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
            onClick={() => onSubmitSignUp('EPIC_GAMES')}
            disabled={loading === 'EPIC_GAMES'}
            classNameVariant={`${
                loading === 'EPIC_GAMES'
                    ? 'bg-[#2F2D2E] border-[#2F2D2E] justify-center'
                    : 'hover:bg-[#2F2D2E] hover:border-[#2F2D2E] justify-center'
            }`}
            borderColor="border-[#E5E7EB]"
            fluid={false}
            size="square"
            position="start"
            alt="epic_games"
        >
            <div className="group flex flex-row gap-x-4 hover:text-white">
                <Icon
                    color="fill-[#2F2D2E]"
                    height="24px"
                    width="24px"
                    name="epic_games"
                />{' '}
            </div>
        </Button>
    </div>
</MoreAccordion>

```