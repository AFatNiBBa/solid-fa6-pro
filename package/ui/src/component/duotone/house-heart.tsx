
import { Icon, generic } from "../../index";

/**
 * A component that renders the `house-heart` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/house-heart?s=duotone house-heart}
 * @preview ![house-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/house-heart.svg)
 */
const HouseHeart: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M64 270.5L64.1 448c0 35.3 28.7 64 64 64l320.4 0c35.4 0 64-28.7 64-64c-.1-59.2-.3-118.3-.4-177.4L288 74.5 64 270.5zm112 46.7c0-33.8 27.4-61.3 61.3-61.3c16.2 0 31.8 6.5 43.3 17.9l7.4 7.4 7.4-7.4c11.5-11.5 27.1-17.9 43.3-17.9c33.8 0 61.3 27.4 61.3 61.3c0 16.2-6.5 31.8-17.9 43.3l-82.7 82.7c-6.2 6.2-16.4 6.2-22.6 0l-82.7-82.7c-11.5-11.5-17.9-27.1-17.9-43.3z" />
        <path d="M309.1 7.9C297-2.6 279-2.6 266.9 7.9l-256 224c-13.3 11.6-14.6 31.9-3 45.2s31.9 14.6 45.2 3L288 74.5 522.9 280.1c13.3 11.6 33.5 10.3 45.2-3s10.3-33.5-3-45.2l-256-224zM176 317.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9c-33.8 0-61.3 27.4-61.3 61.3z" />
    </Icon>
);

export default HouseHeart;