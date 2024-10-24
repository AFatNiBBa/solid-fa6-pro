
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-arrow-up-right` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up-right?s=duotone message-arrow-up-right}
 * @preview ![message-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-arrow-up-right.svg)
 */
const MessageArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM160 280c0 6.1 2.3 12.3 7 17s10.8 7 17 7s12.3-2.3 17-7l87-87 0 54.1c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112c0-13.3-10.7-24-24-24l-112 0c-13.3 0-24 10.7-24 24s10.7 24 24 24l54.1 0-87 87c-4.7 4.7-7 10.8-7 17z" />
        <path d="M176 152c0-13.3 10.7-24 24-24l112 0c13.3 0 24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-54.1-87 87c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l87-87L200 176c-13.3 0-24-10.7-24-24z" />
    </Icon>
);

export default MessageArrowUpRight;