
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ampersand` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=sharp-regular circle-ampersand}
 * @preview ![circle-ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/circle-ampersand.svg)
 */
const CircleAmpersand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 128l0 24 0 36.7c0 18.6 7.2 36.4 20 49.8l7.3 7.7-21.9 16.1c-18.5 13.6-29.4 35.1-29.4 58.1l0 39.7 0 24 24 0 88 0 16 0 12.6 0 7.2-10.3 10.8-15.6L327.4 384l66.1 0c-.7-.9-1.4-1.8-2.2-2.6l-60.9-63.6 33.3-48.1 13.7-19.7-39.5-27.3-13.7 19.7-27.7 40.1-28.6-29.9 18-13.2c16.4-12.1 26.2-31.2 26.2-51.6l0-35.7 0-24-24 0-96 0-24 0zm66.4 89.6l-11.7-12.2c-4.3-4.5-6.7-10.4-6.7-16.6l0-12.7 48 0 0 11.7c0 5.1-2.4 9.9-6.5 12.9l-23.1 16.9zm-5.6 63.6l39.8 41.5L259.4 336 192 336l0-15.7c0-7.6 3.6-14.8 9.8-19.4l27-19.8z" />
    </Icon>
);

export default CircleAmpersand;