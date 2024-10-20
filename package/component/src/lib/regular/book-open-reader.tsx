
import { Icon } from "../../index";

/**
 * A component that renders the `book-open-reader` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open-reader?s=regular book-open-reader}
 * @preview ![book-open-reader](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/book-open-reader.svg)
 */
const BookOpenReader: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 144a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM256 0a96 96 0 1 1 0 192A96 96 0 1 1 256 0zM228 279l-.2-.1c-.7-.5-2.4-1.5-5.2-2.9c-5.5-2.8-15.4-7.3-30.6-12.2c-28-9-74.2-19.3-144-22.7l0 176.3c84.9 5 147.1 22.3 184 35.7L232 282l-4-3zm52 3l0 171.1c36.9-13.4 99.1-30.7 184-35.7l0-176.3c-69.9 3.4-116 13.7-144 22.7c-15.1 4.9-25 9.4-30.6 12.2c-2.8 1.4-4.5 2.4-5.2 2.9l-.2 .1-4 3zM32 192.5C199.2 197.4 256 240 256 240s56.8-42.6 224-47.5c17.7-.5 32 13.9 32 31.5l0 208c0 17.7-14.4 31.9-32 32.7c-114.9 4.7-186.9 33.7-208.8 43.8c-4.8 2.2-9.9 3.5-15.1 3.5s-10.4-1.3-15.1-3.5c-21.9-10.1-93.9-39.1-208.8-43.8c-17.7-.7-32-15-32-32.7L0 224c0-17.7 14.4-32.1 32-31.5z" />
    </Icon>
);

export default BookOpenReader;