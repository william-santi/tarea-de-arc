
const classes = {
  container:'side-news',
  content:'side-news__content',
  title:'side-news__title',
  text:'side-news__text',
  button:'side-news__button',
}

export const SideNews = () => {
  return (
    <article className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.title}>
          La mejor cocina de mariscos
          del pacifico
        </h1>
        <p className={classes.text}>
          Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Vitae, eum?
        </p>
        <button className={classes.button}>
          ¡reserva ya!
        </button>
      </div>
    </article>
  )
}
