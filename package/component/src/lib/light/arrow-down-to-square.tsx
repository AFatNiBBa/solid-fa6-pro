
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-down-to-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-down-to-square?s=light arrow-down-to-square}
 * @preview ![arrow-down-to-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-down-to-square.svg)
 */
const ArrowDownToSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.8 330.9l96-104c6-6.5 5.6-16.6-.9-22.6s-16.6-5.6-22.6 .9L272 279.1 272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 263.1-68.2-73.9c-6-6.5-16.1-6.9-22.6-.9s-6.9 16.1-.9 22.6l96 104c3 3.3 7.3 5.1 11.8 5.1s8.7-1.9 11.8-5.1zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l48 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z" />
    </Icon>
);

export default ArrowDownToSquare;