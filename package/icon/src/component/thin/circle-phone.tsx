
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=thin circle-phone}
 * @preview ![circle-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-phone.svg)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM188.8 136.4c5.8-1.6 11.9 1.4 14.2 7l20 48c2 4.9 .6 10.5-3.5 13.9l-24.7 20.2c-2.8 2.3-3.7 6.3-2.2 9.6c17.4 36.9 47.3 66.7 84.2 84.2c3.3 1.6 7.3 .7 9.6-2.2l20.2-24.7c3.4-4.1 9-5.5 13.9-3.5l48 20c5.6 2.3 8.6 8.4 7 14.2l-12 44c-1.4 5.2-6.2 8.8-11.6 8.8c-119.3 0-216-96.7-216-216c0-5.4 3.6-10.2 8.8-11.6l44-12zm29 .8c-5.4-13-19.6-19.9-33.2-16.2l-44 12c-12.2 3.3-20.6 14.4-20.6 27c0 128.1 103.9 232 232 232c12.6 0 23.7-8.4 27-20.6l12-44c3.7-13.6-3.3-27.8-16.2-33.2l-48-20c-11.4-4.8-24.6-1.5-32.4 8.1L278.2 302c-29.1-15.2-53-39.1-68.2-68.2l19.7-16.1c9.6-7.8 12.9-21 8.1-32.4l-20-48z" />
    </Icon>
);

export default CirclePhone;