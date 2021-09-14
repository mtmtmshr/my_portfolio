import Layout from "../components/Layout"
import ListCompornent from "../components/ListCompornent"


const Certification: React.FC = () => {
    return (
        <Layout title="Certification">
            <h2 className="fa fa-github text-2xl pb-2">資格</h2>
            <ListCompornent list_data={
                    ["普通自動車運転免許", "TOEIC Listening & Reading 860点(2021年１月取得)", "応用情報技術者試験",
                    "Coursera DeepLearning.AI Deep Learning専門講座 修了 https://coursera.org/share/3c6d934bb4b682a2628f68fba164d80e",
                    "AWS認定クラウドプラクティショナー"]} />
        </Layout>
    )
}
export default Certification
