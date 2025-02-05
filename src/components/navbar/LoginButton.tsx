import React from 'react'
import { Button } from '../ui/button'

type Props = {
    isLoggedIn: boolean
}

const LoginButton = (props: Props) => {
    if (props.isLoggedIn) {
        return (
             <Button className="px-4 ml-4">Logout</Button>
        )
    }
    else {

        return (
             <Button className="px-4 ml-4">Login</Button>
        )
    }
}

export default LoginButton