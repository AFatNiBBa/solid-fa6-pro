
import { Icon } from "../../index";

/**
 * A component that renders the `address-book` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=thin address-book}
 * @preview ![address-book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/address-book.svg)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 16C69.5 16 48 37.5 48 64l0 384c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-384c0-26.5-21.5-48-48-48L96 16zM32 64C32 28.7 60.7 0 96 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64zM288 192a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm-112 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm24 112c-30.9 0-56 25.1-56 56c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-39.8 32.2-72 72-72l80 0c39.8 0 72 32.2 72 72c0 4.4-3.6 8-8 8s-8-3.6-8-8c0-30.9-25.1-56-56-56l-80 0zM504 80l0 64c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-64c0-4.4 3.6-8 8-8s8 3.6 8 8zm-8 120c4.4 0 8 3.6 8 8l0 64c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-64c0-4.4 3.6-8 8-8zm8 136l0 64c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-64c0-4.4 3.6-8 8-8s8 3.6 8 8z" />
    </Icon>
);

export default AddressBook;