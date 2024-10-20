
import { Icon } from "../../index";

/**
 * A component that renders the `spinner-third` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/spinner-third?s=regular spinner-third}
 * @preview ![spinner-third](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/spinner-third.svg)
 */
const SpinnerThird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M457 372c11.5 6.6 26.3 2.7 31.8-9.3C503.7 330.2 512 294.1 512 256C512 122.7 410.1 13.2 280 1.1C266.8-.1 256 10.7 256 24s10.8 23.9 24 25.4C383.5 61.2 464 149.2 464 256c0 29.3-6.1 57.3-17 82.6c-5.3 12.2-1.5 26.8 10 33.5z" />
    </Icon>
);

export default SpinnerThird;