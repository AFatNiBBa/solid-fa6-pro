
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-text` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-text?s=duotone message-text}
 * @preview ![message-text](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-text.svg)
 */
const MessageText: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zm144 72c0 13.3 10.7 24 24 24l64 0 0 136c0 13.3 10.7 24 24 24s24-10.7 24-24l0-136 64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-88 0-88 0c-13.3 0-24 10.7-24 24z" />
        <path d="M144 136c0-13.3 10.7-24 24-24l88 0 88 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 136c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-136-64 0c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default MessageText;