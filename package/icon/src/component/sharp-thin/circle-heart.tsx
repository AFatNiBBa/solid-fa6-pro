
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=sharp-thin circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM243.5 193.9L256 209.5l12.5-15.6 9.3-11.6c11.3-14.1 28.5-22.4 46.6-22.4c32.9 0 59.6 26.7 59.6 59.6l0 3.6c0 16.8-6.7 32.8-18.5 44.7l-24.8 24.8L256 377.3l-84.7-84.7-24.8-24.8c-11.9-11.9-18.5-27.9-18.5-44.7l0-3.6c0-32.9 26.7-59.6 59.6-59.6c18.1 0 35.3 8.2 46.6 22.4l9.3 11.6zm12.5 206l11.3-11.3L352 303.9l24.8-24.8c14.9-14.9 23.2-35 23.2-56l0-3.6c0-41.8-33.9-75.6-75.6-75.6c-22.5 0-43.7 10-58.1 27.2c-.3 .4-.6 .8-1 1.2L256 183.9l-9.3-11.6c-.3-.4-.6-.8-1-1.2c-14.4-17.2-35.6-27.2-58.1-27.2c-41.8 0-75.6 33.9-75.6 75.6l0 3.6c0 21 8.3 41.1 23.2 56L160 303.9l84.7 84.7L256 399.9z" />
    </Icon>
);

export default CircleHeart;