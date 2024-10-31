
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=duotone message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM160 287.9c0 4.2 1.6 8.3 4.7 11.3s7.1 4.7 11.3 4.7c1.3 0 2.6-.2 3.9-.5c12.2-3.1 24.4-6.1 36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4c24-24 47.9-48 71.9-71.9L250 160.6c-24 24-47.9 48-71.9 71.9c-4.1 4.1-7 9.2-8.4 14.9c-3.1 12.2-6.1 24.4-9.2 36.7c-.3 1.3-.5 2.6-.5 3.9zM272.6 138c17.8 17.8 35.6 35.6 53.3 53.3c5-5 9.9-9.9 14.9-14.9c7.4-7.4 11-17 11-26.7s-3.7-19.3-11-26.7c-14.7-14.7-38.6-14.7-53.3 0c-5 5-9.9 9.9-14.9 14.9z" />
        <path d="M287.5 123L272.6 138l53.3 53.3 14.9-14.9c14.7-14.7 14.7-38.6 0-53.3s-38.6-14.7-53.3 0zM250 160.6l-71.9 71.9c-4.1 4.1-7 9.2-8.4 14.9L160.5 284c-1.4 5.5 .2 11.2 4.2 15.2s9.7 5.6 15.2 4.2l36.6-9.2c5.6-1.4 10.8-4.3 14.9-8.4l71.9-71.9L250 160.6z" />
    </Icon>
);

export default MessagePen;