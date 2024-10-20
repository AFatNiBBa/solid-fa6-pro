
import { Icon } from "../../index";

/**
 * A component that renders the `user-magnifying-glass` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-magnifying-glass?s=thin user-magnifying-glass}
 * @preview ![user-magnifying-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/user-magnifying-glass.svg)
 */
const UserMagnifyingGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M112 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm240 0A128 128 0 1 0 96 128a128 128 0 1 0 256 0zM16 482.3C16 392.7 88.7 320 178.3 320l91.4 0c6.2 0 12.3 .3 18.3 1l0-1c0-5.1 .2-10.1 .7-15c-6.2-.7-12.6-1-19-1l-91.4 0C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7c0-.8 0-1.5 0-2.3c-5.4 0-10.7-.3-16-.8c0 1 0 2.1 0 3.1c0 7.6-6.1 13.7-13.7 13.7L29.7 496c-7.6 0-13.7-6.1-13.7-13.7zM448 208.1a112 112 0 1 1 0 224 112 112 0 1 1 0-224zm0 240c32.5 0 62.1-12.1 84.7-32l93.7 93.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L544 404.8c19.9-22.6 32-52.2 32-84.7c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128z" />
    </Icon>
);

export default UserMagnifyingGlass;