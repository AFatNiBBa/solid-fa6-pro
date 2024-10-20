
import { Icon } from "../../index";

/**
 * A component that renders the `book-skull` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-skull?s=sharp-thin book-skull}
 * @preview ![book-skull](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-skull.svg)
 */
const BookSkull: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M56 0C25.1 0 0 25.1 0 56L0 456c0 30.9 25.1 56 56 56l384 0 8 0 0-16-8 0-24 0 0-80 24 0 8 0 0-8L448 8l0-8-8 0L56 0zM400 416l0 80L56 496c-22.1 0-40-17.9-40-40s17.9-40 40-40l344 0zM56 400c-15.7 0-29.8 6.4-40 16.8L16 56c0-22.1 17.9-40 40-40l376 0 0 384L56 400zm76.7-178.8l-7.6 14.1 7 3.8 90.9 49-90.9 49-7 3.8 7.6 14.1 7-3.8 100.2-54 100.2 54 7 3.8 7.6-14.1-7-3.8-90.9-49 90.9-49 7-3.8-7.6-14.1-7 3.8L240 278.9 139.8 225l-7-3.8zM168 136c0-29.4 30.5-56 72-56s72 26.6 72 56c0 17.5-10.5 33.8-28.1 44.3l-3.9 2.3 0 4.5 0 20.8-80 0 0-20.8 0-4.5-3.9-2.3C178.5 169.8 168 153.5 168 136zm72-72c-46.8 0-88 30.7-88 72c0 22.9 12.9 42.7 32 55.6l0 24.4 0 8 8 0 96 0 8 0 0-8 0-24.4c19.1-12.9 32-32.7 32-55.6c0-41.3-41.2-72-88-72zm-32 88a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm80-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default BookSkull;