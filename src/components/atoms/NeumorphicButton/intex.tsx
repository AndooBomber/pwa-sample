import styles from './button.module.scss'

type Props = {
  onClick: () => void
}

const NeumorphicButton: React.FC<Props> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`justify-center items-center ${styles.button}`}
    >
      <img src={'/NFC.svg'} className="h-40 w-40 pt-6" />
    </button>
  )
}

export default NeumorphicButton
