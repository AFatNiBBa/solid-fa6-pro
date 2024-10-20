
import { Icon } from "../../index";

/**
 * A component that renders the `book-heart` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-heart?s=light book-heart}
 * @preview ![book-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-heart.svg)
 */
const BookHeart: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L400 0c26.5 0 48 21.5 48 48l0 320c0 20.9-13.4 38.7-32 45.3l0 66.7 16 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 512c-35.3 0-64-28.7-64-64c0 0 0 0 0 0L0 64zM64 416c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0 0-64L64 416zM32 392.6c9.4-5.4 20.3-8.6 32-8.6l336 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 32C46.3 32 32 46.3 32 64l0 328.6zM160 173.3c0 7.8 3.1 15.2 8.6 20.7L240 265.4l71.4-71.4c5.5-5.5 8.6-12.9 8.6-20.7c0-16.2-13.1-29.3-29.3-29.3c-7.8 0-15.2 3.1-20.7 8.6l-18.7 18.7c-6.2 6.2-16.4 6.2-22.6 0l-18.7-18.7c-5.5-5.5-12.9-8.6-20.7-8.6c-16.2 0-29.3 13.1-29.3 29.3zM189.3 112c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3c0-33.8 27.4-61.3 61.3-61.3z" />
    </Icon>
);

export default BookHeart;