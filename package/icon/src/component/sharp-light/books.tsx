
import { Icon } from "../../index";

/**
 * A component that renders the `books` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=sharp-light books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path d="M128 416l0 64-96 0 0-64 96 0zm0-288l0 256-96 0 0-256 96 0zm0-96l0 64L32 96l0-64 96 0zM160 0L128 0 32 0 0 0 0 32 0 96l0 16 0 16L0 384l0 16 0 16 0 64 0 32 32 0 96 0 32 0 96 0 32 0 0-32 0-64 0-16 0-16 0-153.4 41.6 155.2 4.1 15.5 4.1 15.5 17.2 64.4 8.3 30.9 30.9-8.3 85.8-23 30.9-8.3-8.3-30.9-17.2-64.4-4.1-15.5-4.1-15.5-59-220.1-4.1-15.5L410 95.3 392.7 30.9 384.4 0 353.5 8.3 288 25.8 288 0 256 0 160 0zM288 59l73.8-19.8 17.2 64.4-85.8 23L288 107l0-11 0-37zM256 480l-96 0 0-64 96 0 0 64zm0-384l-96 0 0-64 96 0 0 64zm0 288l-96 0 0-256 96 0 0 256zm130 88.8l-17.2-64.4 85.8-23 17.2 64.4-85.8 23zm-25.5-95.3l-59-220.1 85.8-23 59 220.1-85.8 23z" />
    </Icon>
);

export default Books;