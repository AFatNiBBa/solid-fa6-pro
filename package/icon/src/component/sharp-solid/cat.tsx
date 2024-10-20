
import { Icon } from "../../index";

/**
 * A component that renders the `cat` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cat?s=sharp-solid cat}
 * @preview ![cat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/cat.svg)
 */
const Cat: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M337.1 192L320 192c-66.8 0-125.6 34.1-160 85.8l0-85.8c0-53-43-96-96-96L32 96l0 64 32 0c17.7 0 32 14.3 32 32l0 288 0 32 32 0 208 0 32 0 0-64-32 0-56 0L416 339.2 416 480l0 32 64 0 0-32 0-192 0-32 0-4c-10.2 2.6-21 4-32 4c-47.4 0-88.7-25.7-110.9-64zm194.3-16.4c8-14 12.6-30.3 12.6-47.6l0-82.7L544 0 512 32 480 64s0 0 0 0l-64 0s0 0 0 0L384 32 352 0l0 45.3 0 82.7s0 0 0 0c0 18.6 5.3 36 14.5 50.8c2.9 4.7 6.3 9.1 9.9 13.2c0 0 0 0 0 0c17.6 19.6 43.1 32 71.6 32c11.2 0 22-1.9 32-5.5c0 0 0 0 0 0c21.8-7.7 40-23.1 51.4-42.9zM400 128a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Cat;