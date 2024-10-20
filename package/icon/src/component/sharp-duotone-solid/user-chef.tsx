
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-chef` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-chef?s=sharp-duotone-solid user-chef}
 * @preview ![user-chef](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-chef.svg)
 */
const UserChef: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 160l32 0 16 0 160 0 16 0 32 0c0 70.7-57.3 128-128 128s-128-57.3-128-128z" />
        <path d="M384 48c0 20.9-13.4 38.7-32 45.3l0 18.7 0 48-32 0-16 0-160 0-16 0-32 0 0-48 0-18.7C77.4 86.7 64 68.9 64 48C64 21.5 85.5 0 112 0c14.3 0 27.2 6.3 36 16.3C156.8 6.3 169.7 0 184 0c16.7 0 31.4 8.5 40 21.5C232.6 8.5 247.3 0 264 0c14.3 0 27.2 6.3 36 16.3C308.8 6.3 321.7 0 336 0c26.5 0 48 21.5 48 48zM128 410.8l224-89.6 0 30.8 48 0 48 160-96 0-224 0 0-101.2zM96 400l0 112L0 512 48 352l48 0 0-32 106.4 26.6-96.4 38.5-10.1 4L96 400zm128 32a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm80 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z" />
    </Icon>
);

export default UserChef;