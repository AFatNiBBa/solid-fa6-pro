
import { Icon } from "../../index";

/**
 * A component that renders the `egg` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=sharp-light egg}
 * @preview ![egg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/egg.svg)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 464c-85.2 0-160-84.3-160-176c0-50.8 14.7-113.1 43.5-161.7C104.2 77.9 143.4 48 192 48s87.8 29.9 116.5 78.3C337.3 174.9 352 237.2 352 288c0 91.7-74.8 176-160 176zM0 288C0 394 86 496 192 496s192-102 192-208c0-112-64-272-192-272S0 176 0 288zm112 0c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2l-21.6-23.6c-23.9 21.8-41.1 52.7-52.3 84.2C85.7 226.1 80 259.7 80 288l0 16 32 0 0-16z" />
    </Icon>
);

export default Egg;