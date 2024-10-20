
import { Icon } from "../../index";

/**
 * A component that renders the `user-headset` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/user-headset?s=light user-headset}
 * @preview ![user-headset](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/user-headset.svg)
 */
const UserHeadset: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 32C135.6 32 64 103.6 64 192l0 16c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-16C32 86 118 0 224 0S416 86 416 192l0 16c0 61.9-50.1 112-112 112l-64 0-16 0-16 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l32 0c44.2 0 80-35.8 80-80l0-16c0-88.4-71.6-160-160-160zm0 32c70.7 0 128 57.3 128 128c0 13.9-2.2 27.3-6.3 39.8C337.4 246.3 321.8 256 304 256l-8.4 0c15.2-17 24.4-39.4 24.4-64c0-53-43-96-96-96s-96 43-96 96c0 24.6 9.3 47.1 24.5 64.1c-5.4 9.4-8.5 20.3-8.5 31.9c0 1.4 0 2.7 .1 4C114.8 268.6 96 232.5 96 192c0-70.7 57.3-128 128-128zM208 352l16 0 16 0 64 0 9.6 0C387.8 352 448 412.2 448 486.4c0 14.1-11.5 25.6-25.6 25.6L25.6 512C11.5 512 0 500.5 0 486.4C0 412.2 60.2 352 134.4 352l73.6 0zm105.6 32l-179.2 0C80 384 35.5 426.4 32.2 480l383.6 0c-3.3-53.6-47.8-96-102.2-96z" />
    </Icon>
);

export default UserHeadset;