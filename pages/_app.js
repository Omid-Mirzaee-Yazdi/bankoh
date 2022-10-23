import { GlobalStateProvider } from 'contexts/GlobalStateContext';
import { AuthUserProvider } from 'contexts/userContext';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AuthUserProvider>
      <GlobalStateProvider>
        <Component {...pageProps} />
      </GlobalStateProvider>
    </AuthUserProvider>
  );
}

export default MyApp;
