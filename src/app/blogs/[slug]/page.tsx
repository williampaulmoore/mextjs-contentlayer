import { allPosts } from 'contentlayer/generated';
import React from 'react';
import { notFound } from 'next/navigation';

interface PageProps {
    params: {
        slug: string,
    }
}


const post = ({ params }: PageProps) => {
    const doc = allPosts.find((doc) => doc.slugAsParams === params.slug);

    if(!doc) {
        notFound();
    }

    return (
        <>
        <div data-component-id="page/post/037cfacb-2a9f-4d7c-a657-eb20c72fee0b">
            <h1>{doc.title}</h1>
        </div>
        </>
    )
}

export default post;
