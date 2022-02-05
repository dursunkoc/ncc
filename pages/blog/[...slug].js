import {useRouter} from 'next/router'

export default function BlogPostPages() {
    const router = useRouter()
  return <div><h1>The Blog Post Pages Path:{router.pathname} - Query-{JSON.stringify(router.query)}</h1></div>;
}
