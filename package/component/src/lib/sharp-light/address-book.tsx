
import { Icon } from "../../index";

/**
 * A component that renders the `address-book` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=sharp-light address-book}
 * @preview ![address-book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/address-book.svg)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M64 32l0 448 352 0 0-448L64 32zM32 0L64 0 416 0l32 0 0 32 0 448 0 32-32 0L64 512l-32 0 0-32L32 32 32 0zM512 64l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zm0 128l0 16 0 64 0 16-32 0 0-16 0-64 0-16 32 0zm0 144l0 64 0 16-32 0 0-16 0-64 0-16 32 0 0 16zM272 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm7.1 128l-21.3 64L128 384l32-96 160 0 32 96-33.7 0-21.3-64-113.9 0z" />
    </Icon>
);

export default AddressBook;