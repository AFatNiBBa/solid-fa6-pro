
import { Icon } from "../../index";

/**
 * A component that renders the `square-y` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=light square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm124 53.5L224 263.7 324 149.5c5.8-6.7 15.9-7.3 22.6-1.5s7.3 15.9 1.5 22.6L240 294l0 90c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-90L100 170.5c-5.8-6.7-5.1-16.8 1.5-22.6s16.8-5.1 22.6 1.5z" />
    </Icon>
);

export default SquareY;