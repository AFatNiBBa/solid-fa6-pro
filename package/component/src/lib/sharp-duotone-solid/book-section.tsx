
import { Icon, generic } from "../../index";

/**
 * A component that renders the `book-section` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/book-section?s=sharp-duotone-solid book-section}
 * @preview ![book-section](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/book-section.svg)
 */
const BookSection: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M64 416c0-17.7 14.3-32 32-32l160 0 96 0 64 0 0 64-64 0-96 0L96 448c-17.7 0-32-14.3-32-32z" />
        <path d="M96 0C43 0 0 43 0 96L0 416c0 53 43 96 96 96l288 0 32 0 32 0 0-64-32 0-64 0-96 0L96 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l160 0 96 0 64 0 32 0L448 0 416 0 384 0 96 0zM235.9 243.2l-7.5-2c-22.1-5.9-68-18.1-59.5-62.7c2.1-11.2 7.9-20.4 16.7-27.5c-12.2-9.4-20.7-23.1-16.7-44.5c6.1-31.8 40.4-48 87.5-41.3c8.3 1.2 18 3.5 30.2 7.3l-9.5 30.6c-10.6-3.3-18.6-5.3-25.2-6.2c-27.8-4-49.1 2.5-51.6 15.7c-1.8 9.3-.2 16.1 36.2 25.8l7.3 1.9c0 0 0 0 0 0c30.1 7.8 75.6 19.6 67 64.7c-2.1 11.2-8 20.5-16.7 27.6c12.6 9.5 20.7 23.2 16.7 44.4c-5.2 27-30.8 42.8-67.3 42.8c-6.4 0-13.2-.5-20.2-1.5c-12.9-1.8-26.6-6.2-38.6-10.1c0 0 0 0 0 0l-5.8-1.9 9.8-30.5 5.9 1.9c10.7 3.5 22.9 7.5 33.1 8.9c28 3.9 49.2-2.5 51.7-15.7c2.4-12.8-5.7-17.9-43.6-27.7zm0-72s-9.4-2.5-10.3-2.7c-8.7 1.2-23 4.8-25.2 16.1c-1.8 9.3-.2 16.1 36.3 25.8c0 0 14.1 3.7 17.7 4.7c8.7-1.2 23-4.8 25.2-16.1c2.4-12.8-5.7-17.9-43.6-27.7z" />
    </Icon>
);

export default BookSection;