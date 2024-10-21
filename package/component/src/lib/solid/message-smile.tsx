
import { Icon } from "../../index";

/**
 * A component that renders the `message-smile` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=solid message-smile}
 * @preview ![message-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/message-smile.svg)
 */
const MessageSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM192 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm128 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM150.5 238.1c-9.9 8.8-10.7 24-1.9 33.9c26.3 29.4 64.7 48 107.3 48s81-18.6 107.3-48c8.8-9.9 8-25-1.9-33.9s-25-8-33.9 1.9c-17.6 19.7-43.1 32-71.6 32s-53.9-12.3-71.6-32c-8.8-9.9-24-10.7-33.9-1.9z" />
    </Icon>
);

export default MessageSmile;