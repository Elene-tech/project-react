import styles from './About.module.scss';
import Container from '../Container/Container';
import NavBar from '../NavBar/NavBar';

const About = () => {
  return (
    <Container>
      <div>
        <h2 className={styles.text}>About</h2>
        <p className={styles.description}>Lorem Ipsum...</p>
      </div>
    </Container>
  );
};
export default About;
