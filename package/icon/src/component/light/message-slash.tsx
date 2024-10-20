
import { Icon } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=light message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M378.8 384l-5.5 0c-6.9 0-13.7 2.2-19.2 6.4L256 464l0-48c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32l0-191.3L64 135.4 64 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416l46 0-40.5-32zM128 0c-8.3 0-16.1 1.6-23.4 4.4L139.6 32 512 32c17.7 0 32 14.3 32 32l0 287.3 28.3 22.3c2.4-6.8 3.7-14 3.7-21.6l0-288c0-35.3-28.7-64-64-64L128 0zM25.9 3.4C19-2 8.9-.8 3.4 6.1S-.8 23.1 6.1 28.6l608 480c6.9 5.5 17 4.3 22.5-2.6s4.3-17-2.6-22.5L25.9 3.4z" />
    </Icon>
);

export default MessageSlash;