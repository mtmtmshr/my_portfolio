import Layout from "../components/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { library, IconName } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

const Contacts: React.FC = () => {
    return (
        <Layout title="Contacts">
            <h2 className="text-2xl pb-2">連絡先</h2>
            <ul className="py-2">
                <li className="pt-2">
                    <FontAwesomeIcon icon={['fab', "github"]} className="w-4 inline"/>
                    <a href="https://github.com/mtmtmshr" className="pl-2 underline">github</a>
                </li>
                <li className="pt-2">
                    <span>Email: s21g479[at]kagawa-u.ac.jp</span>
                </li>
                <li className="pt-2">
                    <FontAwesomeIcon icon={['fab', "twitter"]} className="w-4 inline"/>
                    <a href="https://twitter.com/mtmtmshr1" className="pl-2  underline">Twitter</a>
                </li>
            </ul>
        </Layout>
    )
}
export default Contacts
