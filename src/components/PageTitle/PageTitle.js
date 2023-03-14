import styles from './PageTitle.module.scss';
import '../../styles/settings.scss';

const PageTitle = (props) => {
  return <h2 className={styles.title}>{props.children}</h2>;
};
export default PageTitle;
