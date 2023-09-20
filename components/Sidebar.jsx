import Link from 'next/link';
import styles from '../styles/Sidebar.module.css';
import { BsCalendarCheck, BsFillChatDotsFill } from 'react-icons/bs';
import { FaUtensils, FaClipboardList } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <nav className={styles.sidebar}>
            <ul className={styles.ul}>
                <li> <Link href="/perfil"> <img className={styles.img_img} src="https://static.vecteezy.com/ti/vetor-gratis/p3/17581030-logotipo-da-letra-k-com-coroa-e-forma-de-amor-gratis-vetor.jpg" alt="" /> </Link> </li>

                <div className={styles.lista}>
                    <li> <Link href="/agenda"> <BsCalendarCheck /> </Link> </li>

                    <li> <Link href="/chat"> <BsFillChatDotsFill /> </Link> </li>

                    <li> <Link href="/dieta"> <FaUtensils /> </Link> </li>

                    <li> <Link href="/prontuario"> <FaClipboardList /> </Link> </li>
                </div>

                <li> <Link href="/">Home</Link> </li>
            </ul>
        </nav>
    );
};

export default Sidebar;
