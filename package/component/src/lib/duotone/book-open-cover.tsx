
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-open-cover` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-cover?s=duotone book-open-cover}
 * @preview ![book-open-cover](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/book-open-cover.svg)
 */
const BookOpenCover: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 33.8C64 14.3 81.3-.7 100.6 2.2L304 32l0 416L89.7 405.1c-15-3-25.7-16.1-25.7-31.4L64 33.8zM336 32L539.4 2.2C558.7-.7 576 14.3 576 33.8l0 339.9c0 15.3-10.8 28.4-25.7 31.4L336 448l0-416z" />
        <path d="M89.7 405.1L320 451.2l230.3-46.1c15-3 25.7-16.1 25.7-31.4l0-345 25.7-5.1C621.5 19.7 640 34.8 640 55l0 366.7c0 15.3-10.8 28.4-25.7 31.4L320 512 25.7 453.1C10.8 450.2 0 437 0 421.8L0 55C0 34.8 18.5 19.7 38.3 23.7L64 28.8l0 345c0 15.3 10.8 28.4 25.7 31.4z" />
    </Icon>
);

export default BookOpenCover;