
import { Icon } from "../../index";

/**
 * A component that renders the `egg` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg?s=regular egg}
 * @preview ![egg](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/egg.svg)
 */
const Egg: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 448c-74.7 0-144-75.4-144-160c0-48.3 14.1-107.7 41.3-153.5C116.4 88.8 151.1 64 192 64s75.6 24.8 102.7 70.5C321.9 180.3 336 239.7 336 288c0 84.6-69.3 160-144 160zM0 288C0 394 86 496 192 496s192-102 192-208c0-112-64-272-192-272S0 176 0 288zM170.8 134c6.5-6 7-16.1 1-22.6s-16.1-7-22.6-1c-23.9 21.8-41.1 52.7-52.3 84.2C85.7 226.1 80 259.7 80 288c0 8.8 7.2 16 16 16s16-7.2 16-16c0-24.5 5-54.4 15.1-82.8c10.1-28.5 25-54.1 43.7-71.2z" />
    </Icon>
);

export default Egg;