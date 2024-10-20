
import { Icon } from "../../index";

/**
 * A component that renders the `user-headset` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-headset?s=sharp-regular user-headset}
 * @preview ![user-headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/user-headset.svg)
 */
const UserHeadset: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32C135.6 32 64 103.6 64 192l0 32-32 0 0-32C32 86 118 0 224 0S416 86 416 192l0 112 0 16-16 0-128 0-48 0-48 0 0-64 96 0 0 32 112 0 0-96c0-88.4-71.6-160-160-160zM14.4 464L48 352l96 0 6.6 0 25.4 0 48 0 48 0 25.4 0L400 352l33.6 112L448 512l-50.1 0L50.1 512 0 512l14.4-48zM144 291.9c-29.3-23.5-48-59.5-48-99.9c0-70.7 57.3-128 128-128s128 57.3 128 128c0 23.3-6.2 45.2-17.1 64L304 256l0-32 0-32c0-44.2-35.8-80-80-80s-80 35.8-80 80l0 32 0 67.9zM83.7 400L64.5 464l319 0-19.2-64L83.7 400z" />
    </Icon>
);

export default UserHeadset;