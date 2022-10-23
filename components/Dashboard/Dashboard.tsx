import { useAuth } from 'hooks/useAuth'
import Head from 'next/head'
import styles from './Dashboard.module.css'
import AuthenticatedPage from 'components/AuthenticatedPage/AuthenticatedPage'

export interface DashboardProps {
  children?: React.ReactNode
}

const Dashboard = ({ children }: DashboardProps) => {
  const { authUser } = useAuth()
  return (
    <AuthenticatedPage>
      <Head>
        <title>bankOH | {authUser?.name}</title>
        <meta name="description" content="bankOH - member area" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.component}>{children}</div>
        </div>
      </div>
    </AuthenticatedPage>
  )
}

export default Dashboard
