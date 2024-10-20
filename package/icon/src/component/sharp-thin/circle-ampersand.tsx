
import { Icon } from "../../index";

/**
 * A component that renders the `circle-ampersand` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-ampersand?s=sharp-thin circle-ampersand}
 * @preview ![circle-ampersand](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-ampersand.svg)
 */
const CircleAmpersand: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 128l0 8 0 44.7c0 14.5 5.6 28.3 15.6 38.8l22.2 23.1-39.3 27.7c-19.1 13.5-30.5 35.4-30.5 58.8l0 46.8 0 8 8 0 104 0 16 0 3.9 0 2.4-3.1L309 341.8 349.5 384l22.2 0L319 329.1l47.3-60.2 4.9-6.3-12.6-9.9-4.9 6.3-45.9 58.4-69.6-72.5 37.5-26.4c12.7-9 20.3-23.6 20.3-39.2l0-43.3 0-8-8 0-104 0-8 0zm51 105.3l-23.9-24.9C196 200.9 192 191 192 180.7l0-36.7 88 0 0 35.3c0 10.4-5.1 20.1-13.5 26.1L227 233.3zm-2 21l72.8 75.9L268.1 368 160 368l0-38.8c0-18.2 8.8-35.3 23.7-45.7L225 254.3z" />
    </Icon>
);

export default CircleAmpersand;