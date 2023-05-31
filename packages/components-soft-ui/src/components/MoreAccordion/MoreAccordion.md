```jsx
import LoginButton from "../LoginButton/LoginButton";

<MoreAccordion title="More">
  <div className="flex gap-x-2 pl-3 flex-wrap">
    <div className="mr-1">
      <LoginButton
        provider="DISCORD"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton label="APPLE" provider="APPLE" size="square"></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        provider="TWITTER"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        provider="EPIC_GAMES"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        provider="CHESS"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        provider="REDDIT"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        provider="GOOGLE"
        size="square"
      ></LoginButton>
    </div>
    <div className="mr-1">
      <LoginButton
        provider="TWITCH"
        size="square"
      ></LoginButton>
    </div>
  </div>
</MoreAccordion>;
```