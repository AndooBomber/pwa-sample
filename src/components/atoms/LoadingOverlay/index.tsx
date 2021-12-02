import styles from './loading.module.scss'

const LoadingOverlay: React.FC = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.loader}>Scanning...</div>
    </div>
  )
}

export default LoadingOverlay
