import Layout from "../components/Layout"
import ListCompornent from "../components/ListCompornent"

const Portfolio: React.FC = () => {
    return (
        <Layout title="Portfolio">
            <h2 className="text-2xl">About</h2>
            <h2 className="text-xl pt-4">松本 真拓 / Masahiro Matsumoto</h2>
            <p className="pt-4 px-8 xl, lg, md:px-0"> <span className="pl-2">香川県生まれ香川県育ちの二十二歳．</span><br /> <span className="pl-2">自然言語処理の応用について研究しており，研究テーマは，「機械学習を用いたTwitterユーザの居住地推定」。</span><br /> <span className="pl-2">現在は、ツイート内容からのみだけでなく天気情報などを利用して居住地を推定する方法について研究中</span></p>
            <h2 className="text-2xl pt-4">経歴</h2>
            <ListCompornent list_data={["2014年4月 - 2017年3月 香川県立高松桜井高等学校", "2017年4月 - 2021年3月 香川大学 工学部 電子・情報工学科", "2021年4月 - 香川大学大学院 工学研究科 信頼性情報システム工学専攻"]} />
            <h2 className="text-2xl pt-4">提出論文</h2>
            <ListCompornent 
                list_data={["松本真拓，松原香太，安藤一秋，Twitterで発信される病気症状の可視化に向けたTweetからのユーザの居住地推定の検討，第19回情報科学技術フォーラム FIT，2020", 
                            "松本真拓，松原香太，安藤一秋，Twitterで発信される病気症状の可視化に向けたTwitterユーザの居住地推定手法の検討，情報処理学会 IPSJ，2021"]} 
            />
            <h2 className="text-2xl pt-4">受賞</h2>
            <ListCompornent 
                list_data={["第19回情報科学技術フォーラム FIT奨励賞"]}
            />
        </Layout>
    )
}
export default Portfolio
