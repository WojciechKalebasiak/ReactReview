import React from 'react';
import Link from 'next/link'
import User from '../../components/User/User';
const authPage = (props) => {
    return (
        <div>
            <h1>This is auth page</h1>
            <p>Go to <Link href="/">Main</Link></p>
            <User name="Wojtek" age={22} />
        </div>
    )
}
export default authPage;