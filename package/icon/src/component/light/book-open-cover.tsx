
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=light book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M544 373.8l0-340.3L336 62.1l0 353.3 208-41.6zM304 415.4l0-353.3L96 33.5l0 340.3 208 41.6zM539.6 1.8C558.9-.8 576 14.1 576 33.5l0 340.3c0 15.3-10.8 28.4-25.7 31.4L332.6 448.7c-8.3 1.7-16.8 1.7-25.1 0L89.7 405.1c-15-3-25.7-16.1-25.7-31.4L64 33.5C64 14.1 81.1-.8 100.4 1.8L320 32 539.6 1.8zM0 65.5c0-17.9 14.6-32 32-32l0 32L32 160l0 258.6 281.7 56.3c4.1 .8 8.4 .8 12.6 0L608 418.6 608 160l0-94.5 0-32c17.4 0 32 14.1 32 32l0 353.1c0 15.3-10.8 28.4-25.7 31.4L332.6 506.3c-8.3 1.7-16.8 1.7-25.1 0L25.7 449.9C10.8 447 0 433.8 0 418.6L0 65.5z" />
    </Icon>
);

export default BookOpenCover;