
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-dots` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-dots?s=duotone message-dots}
 * @preview ![message-dots](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-dots.svg)
 */
const MessageDots: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM96 208a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm128 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0zm128 0a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M96 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MessageDots;