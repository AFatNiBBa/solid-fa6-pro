
import { Icon } from "../../index";

/**
 * A component that renders the `book-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-user?s=sharp-thin book-user}
 * @preview ![book-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/book-user.svg)
 */
const BookUser: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 56C0 25.1 25.1 0 56 0L440 0l8 0 0 8 0 400 0 8-8 0-24 0 0 80 24 0 8 0 0 16-8 0L56 512c-30.9 0-56-25.1-56-56L0 56zM56 416c-22.1 0-40 17.9-40 40s17.9 40 40 40l344 0 0-80L56 416zm-40 .8C26.2 406.4 40.3 400 56 400l376 0 0-384L56 16C33.9 16 16 33.9 16 56l0 360.8zM240 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM171.5 256l-21.3 64 179.6 0-21.3-64-136.9 0zM320 240l26.7 80 5.3 16-16.9 0-190.3 0L128 336l5.3-16L160 240l160 0z" />
    </Icon>
);

export default BookUser;