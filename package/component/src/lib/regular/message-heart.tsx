
import { Icon } from "../../index";

/**
 * A component that renders the `message-heart` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-heart?s=regular message-heart}
 * @preview ![message-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/message-heart.svg)
 */
const MessageHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M208 416c0-26.5-21.5-48-48-48l-96 0c-8.8 0-16-7.2-16-16L48 64c0-8.8 7.2-16 16-16l384 0c8.8 0 16 7.2 16 16l0 288c0 8.8-7.2 16-16 16l-138.7 0c-10.4 0-20.5 3.4-28.8 9.6L208 432l0-16zm-.2 76.2l.2-.2 101.3-76L448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l48 0 48 0 0 48 0 4 0 .3 0 6.4 0 21.3c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM205.3 112c-33.8 0-61.3 27.4-61.3 61.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z" />
    </Icon>
);

export default MessageHeart;