
import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=solid messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M64 0C28.7 0 0 28.7 0 64L0 256c0 35.3 28.7 64 64 64l32 0 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 320 352 320c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64L64 0zM352 352l-96 0 0 32c0 35.3 28.7 64 64 64l117.3 0 81.1 60.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3l0-48 32 0c35.3 0 64-28.7 64-64l0-192c0-35.3-28.7-64-64-64l-128 0 0 128c0 53-43 96-96 96z" />
    </Icon>
);

export default Messages;