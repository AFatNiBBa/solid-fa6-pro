
import { Icon } from "../../index";

/**
 * A component that renders the `book-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-heart?s=regular book-heart}
 * @preview ![book-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-heart.svg)
 */
const BookHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0L392 0c30.9 0 56 25.1 56 56l0 288c0 22.3-13.1 41.6-32 50.6l0 69.4 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L80 512c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8L0 424 0 88zM80 400c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0 0-64L80 400zM48 358.7c9.8-4.3 20.6-6.7 32-6.7l312 0c4.4 0 8-3.6 8-8l0-288c0-4.4-3.6-8-8-8L88 48C65.9 48 48 65.9 48 88l0 270.7zm80-185.4c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z" />
    </Icon>
);

export default BookHeart;