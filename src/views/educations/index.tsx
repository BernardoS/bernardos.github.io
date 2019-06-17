import * as DOM from 'DOM'
import cn from 'classnames'
import styles from '~/styles/style.scss'

export default (
  <template>
    <port-details id={styles.education} sticky>
      <div class={cn(styles.sectionHeader, styles.beigeColor)} slot="summary">
        <h2 class={cn(styles.uppercase)}>
          Education
        </h2>
      </div>
      <div class={styles.innerSection}>
        <port-event>
          <h2 class={cn(styles.subTitle)} slot="title">
            Bachelor of Computer Science
          </h2>
          <a class={cn(styles.caption)} target="_blank" href="http://www.ufes.br" slot="location">UFES</a>
          <span class={cn(styles.caption)} slot="timestamp">01/12<br/>07/18</span>
          <p class={cn(styles.text)}>
            Research on structural supporting the development of Situation-awareness applications based on Context-awareness concepts. Motivated by the increasing number of data to support the development of applications that are more sensible to an user.
          </p>
        </port-event>
        <port-event>
          <h2 class={cn(styles.subTitle)} slot="title">Meaningful Data and Automation</h2>
          <a target="_blank" href="https://www.hanze.nl" class={cn(styles.caption)} slot="location">Hanze</a>
          <span class={cn(styles.caption)} slot="timestamp">01/15<br/>01/16</span>
          <p class={cn(styles.text)}>
            One year exchange experience on Netherlands sponsored by the Brazilian government with the program BRANETEC. I've learned a lot about automation and the utilization of big data in the sense of sensors and embedded systems.
          </p>
        </port-event>
      </div>
    </port-details>
  </template>
) as HTMLTemplateElement
