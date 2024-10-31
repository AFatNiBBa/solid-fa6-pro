
import { Icon } from "../../index";

/**
 * A component that renders the `books` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/books?s=sharp-solid books}
 * @preview ![books](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/books.svg)
 */
const Books: typeof Icon = x => (
    <Icon {...x}>
        <path d="M355.4 398.3L320 268.3l0-125.5 93.7-25.1 67.2 247L355.4 398.3zM405.3 86.8L320 109.6l0-93.4L381.7 0l23.6 86.8zM363.8 429.2l125.5-33.6L512 478.9 386.3 512l-22.5-82.8zM0 0L128 0l0 96L0 96 0 0zM0 128l128 0 0 256L0 384 0 128zM0 416l128 0 0 96L0 512l0-96zM160 0L288 0l0 96L160 96l0-96zm0 128l128 0 0 256-128 0 0-256zm0 288l128 0 0 96-128 0 0-96z" />
    </Icon>
);

export default Books;