
import { Icon } from "../../index";

/**
 * A component that renders the `books` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=solid books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 32C0 14.3 14.3 0 32 0L96 0c17.7 0 32 14.3 32 32l0 64L0 96 0 32zm0 96l128 0 0 256L0 384 0 128zM0 416l128 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zM160 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 64L160 96l0-64zm0 96l128 0 0 256-128 0 0-256zm0 288l128 0 0 64c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-64zm203.6-19.9L320 232.6l0-89.9 100.4-26.9 66 247.4L363.6 396.1zM412.2 85L320 109.6 320 11l36.9-9.9c16.9-4.6 34.4 5.5 38.9 22.6L412.2 85zM371.8 427l122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1l-61.4 16.5c-16.9 4.6-34.4-5.5-38.9-22.6L371.8 427z" />
    </Icon>
);

export default Books;