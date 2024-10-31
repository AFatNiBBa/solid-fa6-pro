
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=sharp-light circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M480 256C480 132.3 379.7 32 256 32S32 132.3 32 256c0 67.5 29.8 128 77 169l35-105 224 0 35 105c47.2-41.1 77-101.6 77-169zM376 445.2L344.9 352l-177.9 0L136 445.2c34.7 22 75.9 34.8 120 34.8c44.5 0 85.9-13 120.7-35.3l-.7 .5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm208-48a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm48 80a80 80 0 1 1 0-160 80 80 0 1 1 0 160z" />
    </Icon>
);

export default CircleUser;