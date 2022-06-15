import Layout from "../components/Layout"
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();
  
  return (
    <div>
      <a className="underline pt-4 text-blue-600 hover:text-blue-400" onClick = {() => router.push('https://search.yahoo.co.jp/search?p=%E3%82%A6%E3%82%AF%E3%83%A9%E3%82%A4%E3%83%8A%E6%94%AF%E6%8F%B4&fr=top_ga1_sa&ei=UTF-8&ts=2232&aq=0&oq=%E3%81%86%E3%81%8F%E3%82%89&at=s&ai=e5ba3898-e324-4b3a-a557-d806ccc2d26d')}>詳細はこちら</a>
    </div>
    
  )
}
export default Home
