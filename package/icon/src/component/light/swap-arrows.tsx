
import { Icon } from "../../index";

/**
 * A component that renders the `swap-arrows` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/swap-arrows?s=light swap-arrows}
 * @preview ![swap-arrows](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/swap-arrows.svg)
 */
const SwapArrows: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M100.7 20.7c6.2-6.2 16.4-6.2 22.6 0l88 88c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L128 70.6 128 360c0 48.6 39.4 88 88 88s88-39.4 88-88l0-208c0-66.3 53.7-120 120-120s120 53.7 120 120l0 289.4 60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6l-88 88c-6.2 6.2-16.4 6.2-22.6 0l-88-88c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L512 441.4 512 152c0-48.6-39.4-88-88-88s-88 39.4-88 88l0 208c0 66.3-53.7 120-120 120s-120-53.7-120-120L96 70.6 35.3 131.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l88-88z" />
    </Icon>
);

export default SwapArrows;