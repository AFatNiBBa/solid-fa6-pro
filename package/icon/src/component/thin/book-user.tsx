
import { Icon } from "../../index";

/**
 * A component that renders the `book-user` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-user?s=thin book-user}
 * @preview ![book-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/book-user.svg)
 */
const BookUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L408 0c22.1 0 40 17.9 40 40l0 336c0 19.4-13.7 35.5-32 39.2l0 80.8 24 0c4.4 0 8 3.6 8 8s-3.6 8-8 8L56 512c-30.9 0-56-25.1-56-56L0 56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416zm-40 .8C26.2 406.4 40.3 400 56 400l352 0c13.3 0 24-10.7 24-24l0-336c0-13.3-10.7-24-24-24L56 16C33.9 16 16 33.9 16 56l0 360.8zM240 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM200 256c-30.9 0-56 25.1-56 56c0 4.4 3.6 8 8 8l176 0c4.4 0 8-3.6 8-8c0-30.9-25.1-56-56-56l-80 0zm-72 56c0-39.8 32.2-72 72-72l80 0c39.8 0 72 32.2 72 72c0 13.3-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default BookUser;