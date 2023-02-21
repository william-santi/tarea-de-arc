
const classes = {
    content: 'left-news',
    article: 'left-news__article',
    description:'left-news__description',
    descripImg:'left-news__description-img',
    wrapper: 'left-news__wrapper',
    container:'left-news__container',
    img:     'left-news__img',
    text:    'left-news__text'
}

export const LeftNews = () => {
  return (
    <section className={classes.content}>
        <div className={classes.article}>
            <div className={classes.description}>
                <h2>Un año en guerra</h2>
                <h1>
                    Lorem ipsum dolor sit 
                    amet consectetur adipisicing elit. Aut, dignissimos!
                </h1>
                <p>Lorem, ipsum dolor.</p>
            </div>
            <div className={classes.descripImg}>
                <img src="https://humanidades.com/wp-content/uploads/2017/03/noticia-1-e1565056120272.jpg" alt="man" />
            </div>
        </div>

        <div className={classes.wrapper}>
            <div className={classes.container}>
                <div className={classes.img}>
                    <img src="https://static01.nyt.com/images/2023/01/27/world/27PERU-PROTESTS-ESP-07/27PERU-PROTESTS-08-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="manifestantes" />
                </div>
                <div className={classes.text}>
                    <span>Manifestantes</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio pariatur hic sapiente dignissimos.
                    </p>
                </div>
            </div>
            <div className={classes.container}>
                <div className={classes.img}>
                    <img src="https://static01.nyt.com/images/2023/01/27/world/27PERU-PROTESTS-ESP-07/27PERU-PROTESTS-08-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="manifestantes" />
                </div>
                <div className={classes.text}>
                    <span>Manifestantes</span>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio pariatur hic sapiente dignissimos.
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}
