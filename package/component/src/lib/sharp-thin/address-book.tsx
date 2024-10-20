
import { Icon } from "../../index";

/**
 * A component that renders the `address-book` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=sharp-thin address-book}
 * @preview ![address-book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/address-book.svg)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 16l0 480 384 0 0-480L48 16zM32 0L48 0 432 0l16 0 0 16 0 480 0 16-16 0L48 512l-16 0 0-16L32 16 32 0zM504 80l0 64 0 8-16 0 0-8 0-64 0-8 16 0 0 8zm0 120l0 8 0 64 0 8-16 0 0-8 0-64 0-8 16 0zm0 136l0 64 0 8-16 0 0-8 0-64 0-8 16 0 0 8zM150.2 368l-16.9 0L160 288l160 0 26.7 80-16.9 0-21.3-64-136.9 0-21.3 64zM288 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z" />
    </Icon>
);

export default AddressBook;