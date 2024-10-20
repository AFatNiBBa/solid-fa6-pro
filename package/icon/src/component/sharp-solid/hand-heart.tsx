
import { Icon } from "../../index";

/**
 * A component that renders the `hand-heart` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-heart?s=sharp-solid hand-heart}
 * @preview ![hand-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/hand-heart.svg)
 */
const HandHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 0l0 32 0 224 32 0 0-192 0-32 64 0 0 32 0 192 32 0 0-128 0-32 64 0 0 32 0 208c0 97.2-78.8 176-176 176l-19.2 0c-59.6 0-116.9-22.9-160-64L29.3 357 .3 329.4l55.2-57.9 29 27.6 43.6 41.5c0-1.5-.1-3.1-.1-4.6l0-272 0-32 64 0 0 32 0 192 32 0 0-224 0-32 64 0zM213.4 359.5c0 10.7 4.4 21 12.1 28.4L280.7 441l7.4 7.1 7.4-7.1 55.2-53.1c7.7-7.4 12.1-17.7 12.1-28.4c0-21.8-17.7-39.5-39.5-39.5l-1.6 0c-10.6 0-20.8 4.1-28.5 11.5l-5.1 4.9-5.1-4.9c-7.7-7.4-17.9-11.5-28.5-11.5l-1.6 0c-21.8 0-39.5 17.7-39.5 39.5z" />
    </Icon>
);

export default HandHeart;