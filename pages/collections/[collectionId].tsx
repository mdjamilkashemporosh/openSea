import React from 'react';
import { useRouter } from 'next/router';

function collection() {
    const router = useRouter();

    return (
        <div>{router.query.collectionId}</div>
    )
}

export default collection;