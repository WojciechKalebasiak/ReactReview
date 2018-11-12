import React from 'react'
import Link from 'next/link';
const errorPage = () => {
    return(
        <div>
            <h1>Ooops somethign went wrong</h1>
            <Link href="/"><a>Go back to main page</a></Link>
        </div>
    )
}
export default errorPage;