import styles from './About.module.scss';
import Container from '../Container/Container';
import PageTitle from '../PageTitle/PageTitle';
const About = () => {
  return (
    <Container>
      <div>
        <PageTitle>About</PageTitle>
        <p className={styles.description}>Lorem Ipsum...</p>
      </div>
    </Container>
  );
};
export default About;
