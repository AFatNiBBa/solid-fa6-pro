
import { Icon, generic } from "../../index";

/**
 * A component that renders the `user-headset` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-headset?s=sharp-duotone-solid user-headset}
 * @preview ![user-headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/user-headset.svg)
 */
const UserHeadset: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M96 192c0-70.7 57.3-128 128-128s128 57.3 128 128c0 23.3-6.2 45.2-17.1 64L304 256l0-32-32 0-96 0-32 0 0 32 0 35.9c-29.3-23.5-48-59.5-48-99.9z" />
        <path d="M224 32C135.6 32 64 103.6 64 192l0 32-32 0 0-32C32 86 118 0 224 0S416 86 416 192l0 112 0 16-16 0-128 0-48 0-48 0 0-64 96 0 0 32 112 0 0-96c0-88.4-71.6-160-160-160zM448 512L0 512 48 352l352 0 48 160z" />
    </Icon>
);

export default UserHeadset;