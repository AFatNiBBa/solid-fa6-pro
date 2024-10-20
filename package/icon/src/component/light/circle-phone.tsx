
import { Icon } from "../../index";

/**
 * A component that renders the `circle-phone` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-phone?s=light circle-phone}
 * @preview ![circle-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-phone.svg)
 */
const CirclePhone: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM203.2 144.1c1.9-.4 3.8 .6 4.5 2.3l24 56c.7 1.6 .2 3.5-1.1 4.7l-20.3 16.6c-6.1 5-7.6 13.6-3.7 20.4c14.7 25.4 35.9 46.6 61.4 61.4c6.8 3.9 15.4 2.4 20.4-3.7l16.6-20.3c1.1-1.4 3-1.8 4.7-1.1l56 24c1.8 .8 2.7 2.6 2.3 4.5l-12 56c-.4 1.8-2 3.2-3.9 3.2l-.2 0c-114.7-.1-207.6-93.1-207.7-207.8l0-.2s0 0 0 0s0 0 0 0c0-1.9 1.3-3.5 3.2-3.9l56-12zM352 400l.3 0c16.8-.2 31.3-12 34.9-28.5l12-56c3.6-16.8-5.2-33.9-21-40.6l-56-24c-14.7-6.3-31.9-2.1-42 10.3l-7.5 9.2c-11.9-8.6-22.4-19.1-31-31l9.2-7.5c12.4-10.2 16.6-27.3 10.3-42l-24-56c-6.8-15.8-23.8-24.6-40.6-21l-56 12c-16.5 3.5-28.3 18.1-28.5 34.9l0 .3c0 132.5 107.4 240 240 240z" />
    </Icon>
);

export default CirclePhone;