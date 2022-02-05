import {useRouter} from 'next/router';

export default function ProjectDetailPage() {
    const router = useRouter()
    console.log(router.pathname)
    console.log(router.query)
  return <div><h1>The Project Detail Page</h1></div>;
}
