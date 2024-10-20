
import { Icon } from "../../index";

/**
 * A component that renders the `house-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-user?s=sharp-thin house-user}
 * @preview ![house-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/house-user.svg)
 */
const HouseUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 5.5l5.2 4.5 280 240-10.4 12.1L512 218.5 512 504l0 8-8 0L72 512l-8 0 0-8 0-285.5L13.2 262.1 2.8 249.9l280-240L288 5.5zm0 21.1L80 204.8 80 496l416 0 0-291.2L288 26.5zM288 272a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128zM219.5 336l-21.3 64 179.6 0-21.3-64-136.9 0zM368 320l26.7 80 5.3 16-16.9 0-190.3 0L176 416l5.3-16L208 320l160 0z" />
    </Icon>
);

export default HouseUser;