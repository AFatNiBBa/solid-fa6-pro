
import { Icon } from "../../index";

/**
 * A component that renders the `scissors` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scissors?s=sharp-light scissors}
 * @preview ![scissors](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/scissors.svg)
 */
const Scissors: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 112a80 80 0 1 1 160 0A80 80 0 1 1 32 112zm192 0C224 50.1 173.9 0 112 0S0 50.1 0 112s50.1 112 112 112c29.5 0 56.4-11.4 76.4-30.1l48.9 41.2L262.2 256l-73.8 62.1c-20-18.7-46.9-30.1-76.4-30.1C50.1 288 0 338.1 0 400s50.1 112 112 112s112-50.1 112-112c0-20.8-5.7-40.3-15.5-56.9L506.3 92.2 485.7 67.8 287 235.1l-24.8-20.9-53.7-45.2c9.9-16.7 15.5-36.2 15.5-56.9zM112 320a80 80 0 1 1 0 160 80 80 0 1 1 0-160zm221.7-3.8l152 128 20.6-24.5-152-128-17.6-14.8-24.8 20.9 21.9 18.4z" />
    </Icon>
);

export default Scissors;