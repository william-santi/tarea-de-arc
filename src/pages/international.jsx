import React from 'react'
import { LeftNews, NewsCenter,SideNews } from '../components/index'

const classes = {
  international:'international',
  title:'international__title',
  container:    'international__container',
}

export const International = () => {
  return (
    <div className={classes.international}>
      <h1 className={classes.title}>Internacional</h1>
      <section className={classes.container}>
        <LeftNews/>
        <NewsCenter/>
        <SideNews />
      </section>
    </div>
  )
}
