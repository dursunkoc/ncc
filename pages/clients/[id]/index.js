import { useRouter } from 'next/router';
import React from 'react';

export default function ClientPage() {
  const router = useRouter()

  const handleButtonClick = () => {
    router.push({
      pathname: '/clients/[id]/[projectid]',
      query: { id: `${router.query.id}`, projectid: 'special-project' }
    })
  }
  return <div>
    <h1>Projects of a Client</h1>
    <button onClick={handleButtonClick}>Show Project A</button>
  </div>;
}
