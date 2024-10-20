
import { Icon } from "../../index";

/**
 * A component that renders the `address-book` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/address-book?s=light address-book}
 * @preview ![address-book](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/address-book.svg)
 */
const AddressBook: typeof Icon = x => (
    <Icon {...x}>
        <path d="M96 32C78.3 32 64 46.3 64 64l0 384c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32l0-384c0-17.7-14.3-32-32-32L96 32zM32 64C32 28.7 60.7 0 96 0L384 0c35.3 0 64 28.7 64 64l0 384c0 35.3-28.7 64-64 64L96 512c-35.3 0-64-28.7-64-64L32 64zM272 192a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0 64 64 0 1 1 -128 0zm32 128c-26.5 0-48 21.5-48 48c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80l64 0c44.2 0 80 35.8 80 80c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48l-64 0zM512 80l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16zM496 192c8.8 0 16 7.2 16 16l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16zm16 144l0 64c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16s16 7.2 16 16z" />
    </Icon>
);

export default AddressBook;