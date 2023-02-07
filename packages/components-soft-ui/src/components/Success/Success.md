```jsx
const client =
    [{
        "id": "b991b92f-dbb7-4bb9-aeb0-5f47fd97c1dd",
        "type": 7,
        "grantId": null,
        "userCode": null,
        "uid": null,
        "expiresAt": null,
        "payload": {
            "network": "goerli",
            "client_id": "b991b92f-dbb7-4bb9-aeb0-5f47fd97c1dd",
            "redirect_uris": []
        },
        "disabled": null,
        "consumedAt": null,
        "createdAt": "2023-02-07T19:51:16.935Z",
        "updatedAt": "2023-02-07T19:51:16.935Z",
        "developers": [
            {
                "createdAt": "2023-02-07T19:51:16.938Z",
                "updatedAt": "2023-02-07T19:51:16.938Z",
                "userProvider": "NODE_OIDC",
                "userId": "23121d3c-84df-44ac-b458-3d63a9a05497",
                "oidcId": "b991b92f-dbb7-4bb9-aeb0-5f47fd97c1dd",
                "oidcType": 7,
                "accessLevel": "OWNER"
            }
        ],
        "accessLevel": "OWNER"
    }]
    
import Success from './Success';
<Success clients={client} />
```