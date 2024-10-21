
import { Icon } from "../../index";

/**
 * A component that renders the `circle-user` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-user?s=sharp-thin circle-user}
 * @preview ![circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-user.svg)
 */
const CircleUser: typeof Icon = x => (
    <Icon {...x}>
        <path d="M408.5 441.4C461.9 397.3 496 330.7 496 256C496 123.5 388.5 16 256 16S16 123.5 16 256c0 74.7 34.1 141.3 87.5 185.4L144 320l224 0 40.5 121.4zM395 451.7L356.5 336l-200.9 0L117 451.7c39.2 27.9 87.2 44.3 139 44.3s99.8-16.4 139-44.3zm5.3 15.8C359.2 495.6 309.5 512 256 512s-103.2-16.4-144.3-44.5c-4.3-2.9-8.5-6-12.5-9.1c-.3-.3-.7-.5-1-.8C38.4 410.7 0 337.8 0 256C0 114.6 114.6 0 256 0S512 114.6 512 256c0 81.8-38.4 154.7-98.1 201.6c-4.4 3.4-8.9 6.7-13.4 9.9l-.1 .1zM176 208a80 80 0 1 1 160 0 80 80 0 1 1 -160 0zm80 64a64 64 0 1 0 0-128 64 64 0 1 0 0 128z" />
    </Icon>
);

export default CircleUser;