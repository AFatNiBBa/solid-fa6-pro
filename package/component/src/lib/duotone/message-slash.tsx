
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-slash` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-slash?s=duotone message-slash}
 * @preview ![message-slash](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-slash.svg)
 */
const MessageSlash: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M64 146.4L406.2 416l-32.8 0L249.6 508.8c-2.8 2.1-6.2 3.2-9.6 3.2c-2.4 0-4.9-.6-7.2-1.7c-5.4-2.7-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64l0-205.6zM72.7 31.7C83.8 12.7 104.4 0 128 0L512 0c35.3 0 64 28.7 64 64l0 288c0 21.8-10.9 41-27.5 52.6C389.9 280.3 231.3 156 72.7 31.7z" />
        <path d="M5.1 9.2C13.3-1.2 28.4-3.1 38.8 5.1l592 464c10.4 8.2 12.3 23.3 4.1 33.7s-23.3 12.3-33.7 4.1L9.2 42.9C-1.2 34.7-3.1 19.6 5.1 9.2z" />
    </Icon>
);

export default MessageSlash;