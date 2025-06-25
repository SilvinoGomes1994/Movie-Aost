import { Link } from 'react-router-dom'
import Styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
    return (
        <div className={Styles.container} >
            <h1>Not Found Page ❌</h1>
            <p className={Styles.paragraph}>Error 404</p>
            <Link to={"/"}>
                <button className={Styles.button}>Voltar a Principal</button>
            </Link>
        </div>
    )
}

export default NotFoundPage