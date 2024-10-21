
import { Icon } from "../../index";

/**
 * A component that renders the `book-open` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=light book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M156 32c44.6 0 89.7 8.6 132 22.6C330.3 40.6 375.4 32 420 32c55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1l0 311.5c0 26.9-25.1 44.8-49 40.6c-18.5-3.2-51.3-7.2-99-7.2c-58.9 0-97.8 24.3-111.2 34.1c-7.5 5.5-17.2 9.6-28.2 9.9c-.2 0-.5 0-.7 0l-.2 0-.3 0c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7c-24 4-48-14.1-48-40.2L0 91.1C0 74.5 10.3 59 27.1 53.6C48.8 46.6 100.6 32 156 32zM304 440c20.3-13.5 63.1-36 124-36c49.5 0 84.1 4.2 104.4 7.6c2.5 .4 5.7-.3 8.2-2.3c2.2-1.8 3.4-4 3.4-6.8l0-311.5c0-3.5-2.1-6.1-4.9-7C518.6 77.5 470.5 64 420 64c-38.6 0-78.1 7.1-116 19l0 357zM272 83c-37.9-12-77.4-19-116-19C105.5 64 57.4 77.5 36.9 84c-2.8 .9-4.9 3.6-4.9 7l0 312.5c0 2.7 1.1 4.9 3.1 6.5c2.2 1.8 5.1 2.5 7.6 2.1c21.3-3.6 58-8.2 105.3-8.2c56.8 0 102.8 23.7 124 36.9L272 83z" />
    </Icon>
);

export default BookOpen;