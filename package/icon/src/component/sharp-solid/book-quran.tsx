
import { Icon } from "../../index";

/**
 * A component that renders the `book-quran` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-quran?s=sharp-solid book-quran}
 * @preview ![book-quran](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-quran.svg)
 */
const BookQuran: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M352 0c53 0 96 43 96 96l0 320c0 53-43 96-96 96L64 512l-32 0L0 512l0-64 32 0 0-64L0 384 0 0 32 0 64 0 352 0zm0 384L96 384l0 64 256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32zM301.7 90.3C280.1 73.8 253.2 64 224 64C153.3 64 96 121.3 96 192s57.3 128 128 128c29.2 0 56.1-9.8 77.7-26.3c-7 1.5-14.3 2.3-21.7 2.3c-57.4 0-104-46.6-104-104s46.6-104 104-104c7.4 0 14.7 .8 21.7 2.3zm-6.9 81.3L280 136l-14.8 35.6-38.4 3.1L256 199.8l-8.9 37.5L280 217.2l32.9 20.1L304 199.8l29.3-25.1-38.4-3.1z" />
    </Icon>
);

export default BookQuran;