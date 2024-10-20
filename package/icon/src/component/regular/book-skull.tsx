
import { Icon } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=regular book-skull}
 * @preview ![book-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-skull.svg)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0L392 0c30.9 0 56 25.1 56 56l0 288c0 22.3-13.1 41.6-32 50.6l0 69.4 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24L80 512c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8L0 424 0 88zM48 432c0 17.7 14.3 32 32 32l288 0 0-64L80 400c-17.7 0-32 14.3-32 32zm0-73.3c9.8-4.3 20.6-6.7 32-6.7l312 0c4.4 0 8-3.6 8-8l0-288c0-4.4-3.6-8-8-8L88 48C65.9 48 48 65.9 48 88l0 270.7zM288 195.2l0 12.8c0 8.8-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16l0-12.8c-19.4-11.7-32-30.3-32-51.2c0-35.3 35.8-64 80-64s80 28.7 80 64c0 20.9-12.6 39.5-32 51.2zM224 144a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm48 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM128.8 234.9c2.8-8.4 11.9-12.9 20.2-10.1L240 255.1l90.9-30.3c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2L290.6 272l50.5 16.8c8.4 2.8 12.9 11.9 10.1 20.2s-11.9 12.9-20.2 10.1L240 288.9l-90.9 30.3c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2L189.4 272l-50.5-16.8c-8.4-2.8-12.9-11.9-10.1-20.2z" />
    </Icon>
);

export default BookSkull;