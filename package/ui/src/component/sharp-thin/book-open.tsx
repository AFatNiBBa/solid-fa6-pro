
import { Icon } from "../../index";

/**
 * A component that renders the `book-open` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=sharp-thin book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M296 70.1l0 387.6c7.4-3.6 17.1-7.9 28.6-12.2c27.2-10.3 65.1-20.8 107.2-21.5c29.6-.5 67.1 5.9 96.3 12c12.2 2.6 23.2 5.1 31.9 7.3l0-361.9c-.8-.4-1.7-.9-2.7-1.4c-7-3.5-17.4-8.2-30.7-13C499.9 57.5 461.8 48 416 48c-30.2 0-60.8 5.7-84.1 11.5c-11.6 2.9-21.3 5.8-28 8c-3.4 1.1-6 2-7.7 2.6l-.2 .1zM280 457.7L280 70l-.4-.2c-1.5-.6-3.8-1.5-6.8-2.5c-6-2.1-14.8-5-25.8-7.9C224.9 53.7 194.3 48 160 48c-45.8 0-83.9 9.5-110.6 19.1c-13.3 4.8-23.7 9.5-30.7 13c-.9 .5-1.8 .9-2.7 1.4l0 361.9c8.7-2.2 19.7-4.7 31.9-7.3c29.2-6.1 66.7-12.5 96.3-12c42.1 .7 80 11.2 107.2 21.5c11.5 4.3 21.2 8.7 28.6 12.2zM416 32c96 0 160 40 160 40l0 375.4 0 16.6s-6.1-1.7-16-4.2c-28.1-7-87.1-20.4-128-19.8c-79.3 1.2-144 40-144 40s-64.7-38.8-144-40c-40.9-.6-99.9 12.8-128 19.8C6.1 462.3 0 464 0 464l0-16.6L0 72s64-40 160-40c72 0 128 24 128 24s64-24 128-24z" />
    </Icon>
);

export default BookOpen;