
import { Icon } from "../../index";

/**
 * A component that renders the `rectangle-code` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-code?s=light rectangle-code}
 * @preview ![rectangle-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/rectangle-code.svg)
 */
const RectangleCode: typeof Icon = x => (
    <Icon {...x}>
        <path d="M448 64c17.7 0 32 14.3 32 32l0 320c0 17.7-14.3 32-32 32L64 448c-17.7 0-32-14.3-32-32L32 96c0-17.7 14.3-32 32-32l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM293.4 172c-6.6 5.9-7.2 16-1.3 22.6L346.6 256 292 317.4c-5.9 6.6-5.3 16.7 1.3 22.6s16.7 5.3 22.6-1.3l64-72c5.4-6.1 5.4-15.2 0-21.3l-64-72c-5.9-6.6-16-7.2-22.6-1.3zM220 194.6c5.9-6.6 5.3-16.7-1.3-22.6s-16.7-5.3-22.6 1.3l-64 72c-5.4 6.1-5.4 15.2 0 21.3l64 72c5.9 6.6 16 7.2 22.6 1.3s7.2-16 1.3-22.6L165.4 256 220 194.6z" />
    </Icon>
);

export default RectangleCode;