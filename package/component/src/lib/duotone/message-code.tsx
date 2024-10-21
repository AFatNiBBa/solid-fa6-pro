
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-code` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-code?s=duotone message-code}
 * @preview ![message-code](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-code.svg)
 */
const MessageCode: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM112 208c0 6.1 2.3 12.3 7 17l64 64c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7l-64 64c-4.7 4.7-7 10.8-7 17zm183-81c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9c4.7 4.7 10.8 7 17 7s12.3-2.3 17-7l64-64c4.7-4.7 7-10.8 7-17s-2.3-12.3-7-17l-64-64c-4.7-4.7-10.8-7-17-7s-12.3 2.3-17 7z" />
        <path d="M217 127c9.4 9.4 9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c9.4-9.4 24.6-9.4 33.9 0zm78.1 0c9.4-9.4 24.6-9.4 33.9 0l64 64c9.4 9.4 9.4 24.6 0 33.9l-64 64c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z" />
    </Icon>
);

export default MessageCode;