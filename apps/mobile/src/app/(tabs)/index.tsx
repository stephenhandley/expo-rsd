import { html, css } from 'react-strict-dom';
import { Button } from '@repo/ui/button';

export default function TabOneScreen() {
  return (
    <html.div style={styles.container}>
      <Button 
        style={styles.button} 
        onClick={() => alert("Hello from ui button inside expo")}
      >
        CLICK
      </Button>
    </html.div>
  );
}

const styles = css.create({
  button: {
    fontSize: 200,
    cursor: 'pointer',
  },
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
