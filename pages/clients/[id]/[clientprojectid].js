import { useRouter } from 'next/router';
import React from 'react';

export default function ClientDetailPage() {
  const router = useRouter()

  return <div><h1>Details of Client {router.query.id}'s Project {router.query.clientprojectid} </h1></div>;
}
