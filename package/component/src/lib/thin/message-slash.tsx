
import { Icon } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=thin message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M386.2 400l-12.9 0c-3.5 0-6.8 1.1-9.6 3.2L240 496l0-80c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48l0-193.7L64 145.6 64 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L373.3 416l33.1 0-20.3-16zM128 0c-4.8 0-9.6 .5-14.1 1.6L132.2 16 512 16c26.5 0 48 21.5 48 48l0 288c0 .6 0 1.1 0 1.7l14.7 11.6c.9-4.3 1.4-8.7 1.4-13.3l0-288c0-35.3-28.7-64-64-64L128 0zM13 1.7C9.5-1 4.5-.4 1.7 3S-.4 11.5 3 14.3l624 496c3.5 2.7 8.5 2.2 11.2-1.3s2.2-8.5-1.3-11.2L13 1.7z" />
    </Icon>
);

export default MessageSlash;