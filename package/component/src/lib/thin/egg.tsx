
import { Icon } from "../../index";

/**
 * A component that renders the `egg` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=thin egg}
 * @preview ![egg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/egg.svg)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 480C96.4 480 16 386.9 16 288c0-53.4 15.4-118.6 45.8-169.8C92.1 66.9 135.7 32 192 32s99.9 34.9 130.2 86.2C352.6 169.4 368 234.6 368 288c0 98.9-80.4 192-176 192zM0 288C0 394 86 496 192 496s192-102 192-208c0-112-64-272-192-272S0 176 0 288zM141.4 120.1c3.3-3 3.5-8 .5-11.3s-8-3.5-11.3-.5c-22.6 20.6-39.2 50.2-50.1 80.9C69.5 220 64 252.6 64 280c0 4.4 3.6 8 8 8s8-3.6 8-8c0-25.4 5.2-56.3 15.5-85.4c10.4-29.2 25.8-56.2 45.9-74.5z" />
    </Icon>
);

export default Egg;