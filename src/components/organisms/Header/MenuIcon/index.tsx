import styles from './menu_icon.module.scss'

type Props = {
  isOpen: boolean
  onClick: () => void
}

export const MenuIcon: React.FC<Props> = ({ isOpen, onClick }: Props) => {
  return (
    <div>
      <button
        className={`${styles.menuButton} ${isOpen ? styles.active : ''}`}
        type="button"
        onClick={onClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  )
}
