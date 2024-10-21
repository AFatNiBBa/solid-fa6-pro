
import { Icon } from "../../index";

/**
 * A component that renders the `book-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-heart?s=sharp-thin book-heart}
 * @preview ![book-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-heart.svg)
 */
const BookHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L440 0l8 0 0 8 0 400 0 8-8 0-24 0 0 80 24 0 8 0 0 16-8 0L56 512c-30.9 0-56-25.1-56-56L0 56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416zm-40 .8C26.2 406.4 40.3 400 56 400l376 0 0-384L56 16C33.9 16 16 33.9 16 56l0 360.8zM232.3 129.2l7.7 7.4 7.7-7.4c11.5-11 26.8-17.2 42.7-17.2l2.4 0c32.7 0 59.2 26.5 59.2 59.2c0 16.1-6.6 31.5-18.2 42.7l-82.8 79.6L240 304.1l-11.1-10.7-82.8-79.6c-11.6-11.2-18.2-26.6-18.2-42.7c0-32.7 26.5-59.2 59.2-59.2l2.4 0c15.9 0 31.2 6.2 42.7 17.2zm-3.4 18.9l-7.7-7.4c-8.5-8.2-19.8-12.7-31.6-12.7l-2.4 0c-23.9 0-43.2 19.3-43.2 43.2c0 11.7 4.8 23 13.2 31.1L240 281.9l82.8-79.6c8.5-8.1 13.2-19.4 13.2-31.1c0-23.9-19.3-43.2-43.2-43.2l-2.4 0c-11.8 0-23.1 4.6-31.6 12.7l-7.7 7.4L240 158.8l-11.1-10.7z" />
    </Icon>
);

export default BookHeart;