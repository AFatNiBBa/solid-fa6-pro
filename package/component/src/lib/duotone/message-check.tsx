
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-check?s=duotone message-check}
 * @preview ![message-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-check.svg)
 */
const MessageCheck: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64z" />
        <path d="M369 119c9.4 9.4 9.4 24.6 0 33.9L241 281c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 119c9.4-9.4 24.6-9.4 33.9 0z" />
    </Icon>
);

export default MessageCheck;