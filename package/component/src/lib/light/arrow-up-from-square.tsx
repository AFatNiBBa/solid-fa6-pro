
import { Icon } from "../../index";

/**
 * A component that renders the `arrow-up-from-square` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/arrow-up-from-square?s=light arrow-up-from-square}
 * @preview ![arrow-up-from-square](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/arrow-up-from-square.svg)
 */
const ArrowUpFromSquare: typeof Icon = x => (
    <Icon {...x}>
        <path d="M267.3 4.7c-6.2-6.2-16.4-6.2-22.6 0l-104 104c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 54.6 240 320c0 8.8 7.2 16 16 16s16-7.2 16-16l0-265.4 76.7 76.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-104-104zM64 32C28.7 32 0 60.7 0 96L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-352c0-35.3-28.7-64-64-64l-32 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l32 0c17.7 0 32 14.3 32 32l0 352c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l32 0c8.8 0 16-7.2 16-16s-7.2-16-16-16L64 32z" />
    </Icon>
);

export default ArrowUpFromSquare;