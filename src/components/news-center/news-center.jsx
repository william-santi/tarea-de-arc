import React from 'react';

const classes = {
  content:'news-center',
  wrap:   'news-center__wrap',
  images: 'news-center__images',
}

export const NewsCenter = () => {
  return (
    <section className={classes.content}>
      <div className={classes.wrap}>
        <div className={classes.images}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDmiA2GPrwyRyEF2ODCxa8wD4ZM2bTBETiQ&usqp=CAU" alt="guerra" />
        </div>
        <h2>Invasión en Ucrania</h2>
        <h1>Una de las guerras más sanguinarios en 200 años</h1>
      </div>
      <div className={classes.wrap}>
        <div className={classes.images}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNDmiA2GPrwyRyEF2ODCxa8wD4ZM2bTBETiQ&usqp=CAU" alt="guerra" />
        </div>
        <h2>Invasión en Ucrania</h2>
        <h1>Una de las guerras más sanguinarios en 200 años</h1>
      </div>
    </section>
  )
}
