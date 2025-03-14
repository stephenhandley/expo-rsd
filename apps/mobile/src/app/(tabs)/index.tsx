import { html, css } from 'react-strict-dom';
import { Button } from '@repo/ui/button';

import { ExpoRsdComponent } from '@/components/ExpoRsdComponent';

export default function TabOneScreen() {
  return (
    <html.div style={styles.container}>
      <Button 
        style={styles.button} 
        onClick={() => {
          alert("Hello from ui button inside expo");
        }}
      >
        CLICK
      </Button>
      <ExpoRsdComponent style={styles.wow}>
        WOW
      </ExpoRsdComponent>
    </html.div>
  );
}

const styles = css.create({
  button: {
    fontSize: 100,
    cursor: 'pointer',
    backgroundColor: 'blue',
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
  },
  wow: {
    marginTop: 20,
    fontSize: 300,
    color: 'red'
  }
});
