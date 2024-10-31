
import { Icon } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=sharp-regular book-skull}
 * @preview ![book-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-skull.svg)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0L424 0l24 0 0 24 0 352 0 24-24 0-8 0 0 64 8 0 24 0 0 48-24 0L80 512c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8L0 424 0 88zM48 432c0 17.7 14.3 32 32 32l288 0 0-64L80 400c-17.7 0-32 14.3-32 32zm0-73.3c9.8-4.3 20.6-6.7 32-6.7l320 0 0-304L88 48C65.9 48 48 65.9 48 88l0 270.7zM288 195.2l0 28.8-96 0 0-28.8c-19.4-11.7-32-30.3-32-51.2c0-35.3 35.8-64 80-64s80 28.7 80 64c0 20.9-12.6 39.5-32 51.2zM224 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM133.9 219.8l15.2 5.1L240 255.1l90.9-30.3 15.2-5.1 10.1 30.4-15.2 5.1L290.6 272l50.5 16.8 15.2 5.1-10.1 30.4-15.2-5.1L240 288.9l-90.9 30.3-15.2 5.1-10.1-30.4 15.2-5.1L189.4 272l-50.5-16.8-15.2-5.1 10.1-30.4z" />
    </Icon>
);

export default BookSkull;