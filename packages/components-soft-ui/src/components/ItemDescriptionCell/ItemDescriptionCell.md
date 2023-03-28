```jsx
function getStyledUsernameFromCurrentUser(currentUser, sizeVariant) {
    if (!currentUser.id) {
        return ''
    }
    switch (currentUser.id.split('-')[0].toLowerCase()) {
        case 'twitter':
            return (
                <div className={`flex ${sizeVariant || 'text-[12px]'}`}>
                    <div className="text-[#1DA1F2]">{currentUser.username}</div>
                </div>
            )
        default:
            return (
                <div className={`flex text-gray-2000 ${sizeVariant || 'text-[12px]'}`}>
                    {currentUser.username}
                </div>
            )
    }
}
const currentUser = {username: '@twitterhandle', email: 'testuser@gmail.com', id: 'twitter-123', address: '0x95222290DD7278Aa3Ddd389Cc1E1d165CC4BAfe5',  accessToken: 'SUcVls92PKQlHuYIbar2xiOWjOq9XWI4_578kMzbsr1'}
    
return (<ItemDescriptionCell
          tooltipID="wallet-address"
          title={
            <div className="flex flex-row gap-x-1 text-gray-1600">
              Your{' '}
              {currentUser.username ? (
                <div className="font-bold">
                  {getStyledUsernameFromCurrentUser(currentUser, 'text-[16px]')}
                </div>
              ) : (
                ''
              )}
              Wallet Address
            </div>
          }
          tokenOrAddress={currentUser.address}
          description="Keyp's OAuth creates a wallet for you. This wallet uses MPC and can be used like any other EVM compatible address."
        />)
```