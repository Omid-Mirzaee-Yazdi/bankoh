import type { NextPage } from 'next';
import Head from 'next/head';
import styles from './Login.module.css';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from 'hooks/useAuth';
import routes from 'config/routes';
import { makeSafeCallbackPath } from 'utils/safeCallbackPath';

const Login: NextPage = () => {
  const { authUser, loading, login, error } = useAuth();
  const router = useRouter();
  const callbackPath = router.query.callbackPath as string;
  const safeCallbackPath = makeSafeCallbackPath(callbackPath);

  useEffect(() => {
    if (!loading && authUser) {
      router.push(safeCallbackPath ?? routes.home);
    }
  }, [authUser, safeCallbackPath, loading, router]);

  const handleLogin = useCallback(() => {
    login(safeCallbackPath ?? undefined);
  }, [safeCallbackPath, login]);

  return (
    <div className={styles.container}>
      <Head>
        <title>BankOH</title>
        <meta name='description' content='BankOH - member area' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <button onClick={handleLogin}>
          <span>Sign in with Google</span>
        </button>
      </div>
    </div>
  );
};

export default Login;
