import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/74023958?v=4"
            alt="Felipe Neves Ricardo"
          />
          <div className={styles.authorInfo} >
            <strong>Felipe Neves Ricardo</strong>
            <span>Web developer</span>
          </div>
        </div>
        <time title="05 de junho às 18:30h" dateTime='2022-07-05 18:30:00' >Publicado há 1h</time>
      </header>
      <div className={styles.content}>
      <p>Fala galeraa 👋</p>
      <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
      <p><a href="">👉 jane.design/doctorcare</a></p>
      <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
}