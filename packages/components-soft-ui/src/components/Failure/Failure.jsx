const Failure = ({ error }) => (
    <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export default Failure