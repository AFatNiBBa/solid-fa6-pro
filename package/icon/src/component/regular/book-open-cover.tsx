
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=regular book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M512 337.2l0-284.8L344 77l0 296 168-35.8zM296 373l0-296L128 52.4l0 284.8L296 373zM523.4 2.2C542.7-.7 560 14.3 560 33.8l0 316.3c0 15.1-10.6 28.1-25.3 31.3l-201.3 43c-8.8 1.9-17.9 1.9-26.7 0l-201.3-43C90.6 378.3 80 365.2 80 350.1L80 33.8C80 14.3 97.3-.7 116.6 2.2L320 32 523.4 2.2zM38.3 23.7l10.2 2c-.3 2.7-.5 5.4-.5 8.1l0 40.7 0 267.6 0 66.7 265.8 54.5c2 .4 4.1 .6 6.2 .6s4.2-.2 6.2-.6L592 408.8l0-66.7 0-267.6 0-40.7c0-2.8-.2-5.5-.5-8.1l10.2-2C621.5 19.7 640 34.8 640 55l0 366.9c0 15.2-10.7 28.3-25.6 31.3L335.8 510.4c-5.2 1.1-10.5 1.6-15.8 1.6s-10.6-.5-15.8-1.6L25.6 453.2C10.7 450.2 0 437.1 0 421.9L0 55C0 34.8 18.5 19.7 38.3 23.7z" />
    </Icon>
);

export default BookOpenCover;