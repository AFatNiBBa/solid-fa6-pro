
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ampersand` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=sharp-solid circle-ampersand}
 * @preview ![circle-ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/circle-ampersand.svg)
 */
const CircleAmpersand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM168 128l24 0 96 0 24 0 0 24 0 35.7c0 20.4-9.7 39.6-26.2 51.6l-18 13.2 28.6 29.9 27.7-40.1 13.7-19.7 39.5 27.3-13.7 19.7-33.3 48.1 60.9 63.6c.8 .8 1.5 1.7 2.2 2.6l-66.1 0-24.8-25.9-10.8 15.6L284.6 384 272 384l-16 0-88 0-24 0 0-24 0-39.7c0-22.9 10.9-44.5 29.4-58.1l21.9-16.1-7.3-7.7c-12.8-13.4-20-31.2-20-49.8l0-36.7 0-24zm66.4 89.6l23.1-16.9c4.1-3 6.5-7.8 6.5-12.9l0-11.7-48 0 0 12.7c0 6.2 2.4 12.1 6.7 16.6l11.7 12.2zm-5.6 63.6l-27 19.8c-6.2 4.5-9.8 11.7-9.8 19.4l0 15.7 67.4 0 9.2-13.3-39.8-41.5z" />
    </Icon>
);

export default CircleAmpersand;