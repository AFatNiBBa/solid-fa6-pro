
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-down` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-down?s=solid message-arrow-down}
 * @preview ![message-arrow-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/message-arrow-down.svg)
 */
const MessageArrowDown: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zm280 56c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 118.1-31-31c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c9.4 9.4 24.6 9.4 33.9 0l72-72c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-31 31L280 120z" />
    </Icon>
);

export default MessageArrowDown;