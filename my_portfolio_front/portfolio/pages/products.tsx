import Layout from "../components/Layout"
import Image from 'next/image'

const Products: React.FC = () => {
    return (
        <Layout title="Products">
            <h2 className="text-2xl">制作物</h2>
            <div className="flex justify-center w-full flex-col items-center text-center">
                <h3 className="text-xl pt-12 pb-4">漢字テトリス</h3>
                <p>熟語を作成して消去することができるパズルゲーム．動かし方、消え方は完全にぷよぷよ。名前はテトリス。連鎖や3文字以上の熟語を作成することで高得点を獲得できる．ちなみに消去できる最長文字列は独立行政法人等個人情報保護法。</p>
                <a href="https://github.com/mtmtmshr/kanjitetris" className="underline pt-4">github</a>
                <div className="px-8 flex space-x-40">
                    <Image className="box-boder border-2" src="/kanjitetris.png" width='250' height="300" objectFit="contain"/>
                </div>
                <h4 className="pt-4">開発言語</h4>
                <p>Java</p>
                <h3 className="text-xl pt-16 pb-4">飲食店検索アプリ</h3>
                <p >価格帯や料理ジャンル、地域を入力するとDBから1つだけランダムにレストランを選択するアプリ。全然知らないお店を発見できたり、現在地からの検索もできたりと割と便利。</p>
                <a href="https://gurumenabi-164c5.web.app/" className="underline pt-4">公開サイト</a>
                <a href="https://github.com/mtmtmshr/gurumenabi" className="underline pb-8">github</a>
                
                <div className="px-8 space-x-40 flex flex-wrap">
                    <Image className="box-boder border-2" src="/gurunabi1.png" width='300' height="200" objectFit="contain"/>
                    <Image className="box-boder border-2" src="/gurunabi2.png" width='300' height="200" objectFit="contain"/>
                    <Image className="box-boder border-2" src="/gurunabi3.png" width='300' height="200" objectFit="contain"/>
                </div>
                <h4 className="pt-4">開発言語</h4>
                <p>TypeScript, React, Python, Flask</p>
                <h3 className="text-xl pt-16 pb-4">Wordcloud可視化アプリ</h3>
                <p>Wordcloud上の単語をクリックすることで、その単語がどのような文章で出現しているのかを可視化するアプリ</p>
                <a href="https://word-cloud-visualizer.web.app/" className="underline pt-4">公開サイト</a>
                <a href="https://github.com/mtmtmshr/my_wordcloud_visualization" className="underline">github</a>
                <div className="px-8 flex">
                    <Image className="box-boder border-2" src="/wordcloud2.png" width='400' height="250" objectFit="contain"/>
                    <Image className="box-boder border-2" src="/wordcloud1.png" width='400' height="250" objectFit="contain"/>
                </div>
                <h4 className="pt-4">開発言語</h4>
                <p>TypeScript, React, Python, Flask</p>
            </div>
        </Layout>
    )
}
export default Products
