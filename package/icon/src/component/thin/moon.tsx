
import { Icon } from "../../index";

/**
 * A component that renders the `moon` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/moon?s=thin moon}
 * @preview ![moon](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/moon.svg)
 */
const Moon: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M223.5 48C108.9 48 16 141.1 16 256s92.9 208 207.5 208c56.2 0 107.2-22.4 144.6-58.8c-10.7 1.9-21.7 2.8-32.9 2.8c-105.8 0-191.5-86-191.5-192c0-71.7 39.3-134.3 97.4-167.3c-5.8-.5-11.7-.7-17.6-.7zM0 256C0 132.3 100 32 223.5 32c6.4 0 12.7 .3 19 .8c7 .6 12.8 5.7 14.3 12.5s-1.6 13.9-7.7 17.3c-53.3 30.2-89.3 87.6-89.3 153.3c0 97.2 78.6 176 175.5 176c10.3 0 20.4-.9 30.1-2.6c6.9-1.2 13.8 2.2 17 8.5s1.9 13.8-3.1 18.7C339 455.8 284 480 223.5 480C100 480 0 379.7 0 256z" />
    </Icon>
);

export default Moon;