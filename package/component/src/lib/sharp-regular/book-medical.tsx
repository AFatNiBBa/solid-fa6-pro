
import { Icon } from "../../index";

/**
 * A component that renders the `book-medical` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-medical?s=sharp-regular book-medical}
 * @preview ![book-medical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-medical.svg)
 */
const BookMedical: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 88C0 39.4 39.4 0 88 0L424 0l24 0 0 24 0 352 0 24-24 0-8 0 0 64 8 0 24 0 0 48-24 0L80 512c-44.2 0-80-35.8-80-80c0-2.7 .1-5.4 .4-8L0 424 0 88zM80 400c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0 0-64L80 400zM48 358.7c9.8-4.3 20.6-6.7 32-6.7l320 0 0-304L88 48C65.9 48 48 65.9 48 88l0 270.7zM208 96l64 0 0 64 64 0 0 64-64 0 0 64-64 0 0-64-64 0 0-64 64 0 0-64z" />
    </Icon>
);

export default BookMedical;