import React  from 'react';
import Link from 'next/link';

const page = () => {
    return (
        <>
        <h1 data-component-id="page/home/e72b941f-6202-4d24-a933-b6e4d8d24786" >
            Home
        </h1>
        <Link href='/blogs'>Blogs</Link>
        </>
    );
}

export default page;
