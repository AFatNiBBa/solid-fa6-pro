
import { Icon } from "../../index";

/**
 * A component that renders the `book-open` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-open?s=sharp-light book-open}
 * @preview ![book-open](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/book-open.svg)
 */
const BookOpen: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M272 84.1c-1.2-.5-2.7-1-4.5-1.7c-5.6-2-14-4.7-24.6-7.5c-21.2-5.5-50.4-11-82.9-11c-43.6 0-79.9 9.1-105.2 18.1C45.6 85.4 38 88.6 32 91.4l0 331.7c4-.9 8.3-1.8 12.7-2.7C74 414.2 113 407.5 144.5 408c44.5 .7 84.3 11.9 112.6 22.5c5.4 2 10.4 4.1 14.9 6l0-352.5zm32 352.5c4.6-2 9.6-4 14.9-6c28.2-10.7 68-21.8 112.6-22.5c31.5-.5 70.5 6.2 99.8 12.4c4.4 .9 8.6 1.8 12.7 2.7l0-331.7c-6-2.8-13.6-6-22.8-9.3C495.9 73.1 459.6 64 416 64c-28.4 0-57.6 5.4-80.2 11c-11.2 2.8-20.5 5.6-27 7.7c-1.8 .6-3.4 1.1-4.8 1.6l0 352.2zM416 32c96 0 160 40 160 40l0 358.9 0 33.1s-12.9-3.6-32-8.1c-30.9-7.2-77.8-16.5-112-15.9c-79.3 1.2-144 40-144 40s-64.7-38.8-144-40c-34.2-.5-81.1 8.8-112 15.9C12.9 460.4 0 464 0 464l0-33.1L0 72s64-40 160-40c72 0 128 24 128 24s64-24 128-24z" />
    </Icon>
);

export default BookOpen;