
import { Icon } from "../../index";

/**
 * A component that renders the `hat-chef` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-chef?s=sharp-solid hat-chef}
 * @preview ![hat-chef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hat-chef.svg)
 */
const HatChef: typeof Icon = x => (
    <Icon {...x}>
        <path d="M153.5 51.3C176.9 20.2 214.1 0 256 0s79.1 20.2 102.5 51.3C374.6 39.2 394.7 32 416.4 32C469 32 512 74.6 512 127.2c0 11.1-1.9 22.1-5.7 32.5L448 320l-74.2 0 26-149.3 2.7-15.8L371 149.5l-2.7 15.8L341.3 320 272 320l0-160 0-16-32 0 0 16 0 160-69.3 0L143.8 165.3 141 149.5 109.5 155l2.7 15.8 26 149.3L64 320 5.7 159.8C1.9 149.3 0 138.3 0 127.2C0 74.6 43 32 95.6 32c21.7 0 41.7 7.2 57.9 19.3zM448 352l0 160L64 512l0-160 384 0z" />
    </Icon>
);

export default HatChef;