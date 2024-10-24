
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=sharp-solid book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 96a96 96 0 1 1 192 0A96 96 0 1 1 160 96zm80 152l0 264-70.7-29.4c-16.8-7-34.5-11.6-52.6-13.6L0 456 0 192l57.5 0c56.7 0 112.3 15 161.2 43.6L240 248zm32 264l0-264c52.1-36.4 114.1-56 177.7-56l62.3 0 0 264L387.2 468.5c-23.2 2.3-45.9 8.9-66.8 19.3L272 512z" />
    </Icon>
);

export default BookOpenReader;