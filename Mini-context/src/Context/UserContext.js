import React from 'react'

const UserContext = React.createContext()

export default UserContext

// after wrapping it becomes a context then it will become a provider now all these under wrap components will get access to a global variable - UserContext
// with global variable we need to make a data provider
{/* <UserContext>
    <Login/>
    <Card>
        <Data/>
    </Card>
</UserContext> */}