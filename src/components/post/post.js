import React from 'react'

import styles from './post.css'
const Post = () => (
    <div>
        <h2 className={styles.title}>
            <a href="#" className={styles.link}>
            Block of text
        </a>
        </h2>
        <p className={styles.content}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex leo, rutrum nec justo at, dignissim tincidunt nibh. Suspendisse aliquam, augue ac dapibus vulputate, enim velit congue elit, molestie aliquet purus dui a tellus. Integer faucibus nec lacus sodales viverra. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur volutpat neque sed lectus posuere molestie. Praesent dapibus orci nec blandit dictum. Maecenas vel mauris fringilla sem tempor fermentum non vel nunc. Phasellus posuere, eros nec fringilla sodales, lectus nunc interdum diam, et cursus nibh risus id lacus. Phasellus tristique elementum lacus, pretium euismod leo dignissim at. Sed hendrerit suscipit fringilla.</p>
    </div>
)

export default Post