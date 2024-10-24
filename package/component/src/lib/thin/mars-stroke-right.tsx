
import { Icon } from "../../index";

/**
 * A component that renders the `mars-stroke-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mars-stroke-right?s=thin mars-stroke-right}
 * @preview ![mars-stroke-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/mars-stroke-right.svg)
 */
const MarsStrokeRight: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M48 256a160 160 0 1 1 320 0A160 160 0 1 1 48 256zm335.8-8C379.6 154.5 302.5 80 208 80C110.8 80 32 158.8 32 256s78.8 176 176 176c94.5 0 171.6-74.5 175.8-168l64.2 0 0 56c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56 116.7 0-74.3 74.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0l88-88c3.1-3.1 3.1-8.2 0-11.3l-88-88c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L580.7 248 464 248l0-56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 56-64.2 0z" />
    </Icon>
);

export default MarsStrokeRight;