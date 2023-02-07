import ClientCredentials from "../ClientCredentials/ClientCredentials.jsx";

const Success = ({ clients }) => {
    return (
        <div>
            {clients.map((client) => (
                <ClientCredentials key={client.id} client={client}/>
            ))}
        </div>
    )
}

export default Success