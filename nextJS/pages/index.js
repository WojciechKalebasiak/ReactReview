import React from 'react';
import Link from 'next/link'
import Router from 'next/router';
const indexPage = (props) => {
    return (
        <div>
            <h1>This is main page</h1>
            <button onClick={()=>Router.push('/auth')}>auth</button>
        </div>
    )
}
export default indexPage;