import { html, css } from 'react-strict-dom';

export default function TabOneScreen() {
  return (
    <html.div style={styles.container}>
      <html.div style={styles.title}>This tab uses react-strict-dom</html.div>
    </html.div>
  );
}

const styles = css.create({
  container: {
    padding: 20,
    fontFamily: 'Helvetica',
    color: 'blue',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  }
});
