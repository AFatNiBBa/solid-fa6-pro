
import { Icon } from "../../index";

/**
 * A component that renders the `message-heart` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-heart?s=solid message-heart}
 * @preview ![message-heart](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/message-heart.svg)
 */
const MessageHeart: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zm205.3 48c-33.8 0-61.3 27.4-61.3 61.3c0 16.2 6.5 31.8 17.9 43.3l82.7 82.7c6.2 6.2 16.4 6.2 22.6 0l82.7-82.7c11.5-11.5 17.9-27.1 17.9-43.3c0-33.8-27.4-61.3-61.3-61.3c-16.2 0-31.8 6.5-43.3 17.9l-7.4 7.4-7.4-7.4c-11.5-11.5-27.1-17.9-43.3-17.9z" />
    </Icon>
);

export default MessageHeart;