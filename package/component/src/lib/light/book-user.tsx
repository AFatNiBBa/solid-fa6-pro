
import { Icon } from "../../index";

/**
 * A component that renders the `book-user` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-user?s=light book-user}
 * @preview ![book-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-user.svg)
 */
const BookUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L400 0c26.5 0 48 21.5 48 48l0 320c0 20.9-13.4 38.7-32 45.3l0 66.7 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l336 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 32C46.3 32 32 46.3 32 64l0 328.6zM240 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM208 272c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48l-64 0z" />
    </Icon>
);

export default BookUser;