
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=sharp-regular book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 144A96 96 0 1 0 256 0a96 96 0 1 0 0 192zm0 48s-53.2-39.9-208-46.9c-15-.7-31-1.1-48-1.1l0 48L0 416l0 48c160 0 256 48 256 48s96-48 256-48l0-48 0-176 0-48c-17 0-33 .4-48 1.1C309.2 200.1 256 240 256 240zm208 1.1l0 176.3c-62.8 3.6-114.4 13.9-152.6 24.3c-11.7 3.2-22.2 6.4-31.4 9.5L280 282l4-3 .3-.2c.9-.6 2.9-1.7 6.1-3.3c6.4-3.2 17.9-8.2 35.3-13.5c28.4-8.5 73-17.7 138.2-20.9zm-232 210c-9.2-3-19.6-6.3-31.4-9.5C162.4 431.3 110.8 421 48 417.4l0-176.3c65.2 3.1 109.8 12.3 138.2 20.9c17.5 5.2 28.9 10.2 35.3 13.5c3.2 1.6 5.2 2.8 6.1 3.3l.3 .2 4 3 0 169.2z" />
    </Icon>
);

export default BookOpenReader;