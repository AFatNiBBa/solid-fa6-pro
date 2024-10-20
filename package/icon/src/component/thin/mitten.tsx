
import { Icon } from "../../index";

/**
 * A component that renders the `mitten` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mitten?s=thin mitten}
 * @preview ![mitten](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mitten.svg)
 */
const Mitten: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M0 136C0 60.9 60.9 0 136 0l16.3 0c60.3 0 113.3 39.7 130.4 97.5l33.3 112.8 2.5-3.7C331.9 187.4 353.7 176 377 176c39.2 0 71 31.8 71 71l0 1c0 17.4-6.3 34.3-17.8 47.4L366.6 368l-21.3 0 72.8-83.2c8.9-10.2 13.8-23.3 13.8-36.9l0-1c0-30.4-24.6-55-55-55c-18 0-34.9 8.9-45.2 23.7l-12.1 17.4c-1.8 2.5-4.8 3.8-7.8 3.3s-5.5-2.7-6.4-5.6L267.4 102c-15.1-51-61.9-86-115.1-86L136 16C69.7 16 16 69.7 16 136l0 8.2c0 9.8 1.2 19.6 3.6 29.1L68.2 368l-16.5 0L4.1 177.2C1.4 166.4 0 155.4 0 144.2L0 136zM64 416c-8.8 0-16 7.2-16 16l0 48c0 8.8 7.2 16 16 16l288 0c8.8 0 16-7.2 16-16l0-48c0-8.8-7.2-16-16-16L64 416zM32 432c0-17.7 14.3-32 32-32l288 0c17.7 0 32 14.3 32 32l0 48c0 17.7-14.3 32-32 32L64 512c-17.7 0-32-14.3-32-32l0-48z" />
    </Icon>
);

export default Mitten;