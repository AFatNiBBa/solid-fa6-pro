
import { Icon } from "../../index";

/**
 * A component that renders the `scalpel` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scalpel?s=sharp-light scalpel}
 * @preview ![scalpel](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/scalpel.svg)
 */
const Scalpel: typeof Icon = x => (
    <Icon {...x}>
        <path d="M471.1 95.1c5.8-6.9 8.9-15.6 8.9-24.6l0-4.2C480 47.3 464.7 32 445.8 32c-9.8 0-19.1 4.2-25.6 11.5L231.3 256 337 256 471.1 95.1zm24.6 20.5L352 288l-149.2 0L160 288l28.4-32L396.2 22.2C408.8 8.1 426.8 0 445.8 0C482.3 0 512 29.7 512 66.2l0 4.2c0 16.5-5.8 32.5-16.3 45.1zM33 476.4L178.3 320l43.7 0L85.7 466.8c20-4.6 41.6-10.7 63.1-18.7c66.2-24.8 121.9-64.2 135.9-128l32.7 0C294.5 451.3 132 493.4 48.8 506.4C19.5 511 0 512 0 512l33-35.6z" />
    </Icon>
);

export default Scalpel;