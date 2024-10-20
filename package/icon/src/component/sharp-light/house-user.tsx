
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=sharp-light house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 2.7L298.6 12l272 240-21.2 24L512 243l0 253 0 16-16 0L80 512l-16 0 0-16 0-253L26.6 276 5.4 252l272-240L288 2.7zM96 214.7L96 480l384 0 0-265.3L288 45.3 96 214.7zM288 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm0-96a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM231.1 352l-21.3 64L176 416l32-96 160 0 32 96-33.7 0-21.3-64-113.9 0z" />
    </Icon>
);

export default HouseUser;