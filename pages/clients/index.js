import Link from 'next/link';
import React from 'react';

export default function ClientsPage() {
  const clients = [
    { id: "dk", name: "Dursun KOC" },
    { id: "yk", name: "Yasemin KOC" },
  ]
  return <div>
    <h1>All Clients Page</h1>
    <div>
      <ul>
        {clients.map((cl) =>
          <li key={cl.id}>
            {/* <Link href={`/clients/${cl.id}`}>{cl.name}</Link>  */}
            <Link href={{
              pathname: '/clients/[id]',
              query: { id: cl.id },
            }}>{cl.name}</Link>
          </li>
        )}
      </ul>
    </div>
  </div>;
}
