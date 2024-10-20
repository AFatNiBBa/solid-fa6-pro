
import { Icon } from "../../index";

/**
 * A component that renders the `book-circle-arrow-up` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-circle-arrow-up?s=light book-circle-arrow-up}
 * @preview ![book-circle-arrow-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/book-circle-arrow-up.svg)
 */
const BookCircleArrowUp: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448s0 0 0 0c0 35.3 28.7 64 64 64l330.8 0c-12.9-9.1-24.5-19.9-34.6-32L64 480c-17.7 0-32-14.3-32-32s14.3-32 32-32l262.6 0c-2.9-10.3-4.9-21-5.9-32L64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32l336 0c8.8 0 16 7.2 16 16l0 163.2c10.1-5.2 20.8-9.4 32-12.6L448 48c0-26.5-21.5-48-48-48L64 0zM384 368a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm256 0a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zm-211.3 3.3c6.2 6.2 16.4 6.2 22.6 0L480 342.6l0 89.4c0 8.8 7.2 16 16 16s16-7.2 16-16l0-89.4 28.7 28.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-56-56c-6.2-6.2-16.4-6.2-22.6 0l-56 56c-6.2 6.2-6.2 16.4 0 22.6z" />
    </Icon>
);

export default BookCircleArrowUp;