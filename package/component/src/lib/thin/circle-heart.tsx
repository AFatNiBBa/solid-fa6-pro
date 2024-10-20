
import { Icon } from "../../index";

/**
 * A component that renders the `circle-heart` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-heart?s=thin circle-heart}
 * @preview ![circle-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/circle-heart.svg)
 */
const CircleHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480zm0 496A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm0-329.1l-17.7-18c-29.4-29.8-77-29.8-106.4 0s-29.4 78.2 0 108L233.5 376.1c6.2 6.3 14.3 9.4 22.5 9.4s16.3-3.1 22.5-9.4L380.1 272.9c29.4-29.8 29.4-78.2 0-108s-77-29.8-106.4 0l-17.7 18zm5.7 17l23.4-23.8c23.1-23.5 60.5-23.5 83.6 0c23.2 23.6 23.2 61.9 0 85.5L267.1 364.9c-3.1 3.1-7.1 4.7-11.1 4.7s-8-1.5-11.1-4.7L143.3 261.7c-23.2-23.6-23.2-61.9 0-85.5c23.1-23.5 60.5-23.5 83.6 0l23.4 23.8c3.1 3.2 8.3 3.2 11.4 0z" />
    </Icon>
);

export default CircleHeart;