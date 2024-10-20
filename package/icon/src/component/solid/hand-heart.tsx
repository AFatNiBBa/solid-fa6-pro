
import { Icon } from "../../index";

/**
 * A component that renders the `hand-heart` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hand-heart?s=solid hand-heart}
 * @preview ![hand-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/hand-heart.svg)
 */
const HandHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c17.7 0 32 14.3 32 32l0 208c0 8.8 7.2 16 16 16s16-7.2 16-16l0-176c0-17.7 14.3-32 32-32s32 14.3 32 32l0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-112c0-17.7 14.3-32 32-32s32 14.3 32 32l0 208c0 97.2-78.8 176-176 176l-19.2 0c-59.6 0-116.9-22.9-160-64L12.4 341c-16-15.2-16.6-40.6-1.4-56.6s40.6-16.6 56.6-1.4l60.5 57.6c0-1.5-.1-3.1-.1-4.6l0-272c0-17.7 14.3-32 32-32s32 14.3 32 32l0 176c0 8.8 7.2 16 16 16s16-7.2 16-16l0-208c0-17.7 14.3-32 32-32zM208 362.6c0 12.1 5.1 23.6 14.1 31.6l55.2 49.7c6.1 5.5 15.3 5.5 21.4 0l55.2-49.7c9-8.1 14.1-19.6 14.1-31.6c0-23.5-19.1-42.6-42.6-42.6l-1.1 0c-14.6 0-28.3 7.3-36.4 19.5c-8.1-12.2-21.7-19.5-36.4-19.5l-1.1 0c-23.5 0-42.6 19.1-42.6 42.6z" />
    </Icon>
);

export default HandHeart;