
import { Icon } from "../../index";

/**
 * A component that renders the `book-user` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-user?s=sharp-solid book-user}
 * @preview ![book-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-user.svg)
 */
const BookUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 96C0 43 43 0 96 0L384 0l32 0 32 0 0 384-32 0 0 64 32 0 0 64-32 0-32 0L96 512c-53 0-96-43-96-96L0 96zM64 416c0 17.7 14.3 32 32 32l256 0 0-64L96 384c-17.7 0-32 14.3-32 32zM304 128a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm16 96l-160 0-32 96 224 0-32-96z" />
    </Icon>
);

export default BookUser;