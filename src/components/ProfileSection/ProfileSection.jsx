import { DotsThree } from '@phosphor-icons/react'

import styles from './ProfileSection.module.css'

export function ProfileSection() {
  return (
    <div className={styles.container} >
      <div className={styles.info}>
        <div className={styles.picture} />
        <div>
          <h4>Walter Pinkman</h4>
          <h5>@caradebreno</h5>
        </div>
      </div>
      <DotsThree size={24} weight="bold" />
    </div>
  )
}
