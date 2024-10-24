
import { Icon } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=sharp-thin user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm240 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM21.7 496L75.8 320 288 320c0-5.4 .3-10.7 .8-16L64 304 4.9 496 0 512l16.7 0 414.5 0 16.7 0-4.9-16-5-16.3c-5.9-.4-11.7-1-17.4-2l5.6 18.3L21.7 496zM448 208.1a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240c32.5 0 62.1-12.1 84.7-32l89.7 89.5 5.7 5.7L639.3 500l-5.7-5.7L544 404.8c19.9-22.6 32-52.2 32-84.7c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default UserMagnifyingGlass;