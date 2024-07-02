import styles from './Video.module.css'
import video from '../../../public/assets/background-video.mp4'

function Video() {

  return (
    <>
      <video className={styles.video} src={video} autoPlay loop ></video>
    </>
  )
}

export default Video