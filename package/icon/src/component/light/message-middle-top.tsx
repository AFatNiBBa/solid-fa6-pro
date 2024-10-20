
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle-top` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle-top?s=light message-middle-top}
 * @preview ![message-middle-top](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-middle-top.svg)
 */
const MessageMiddleTop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343.5 128L448 128c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32L64 480c-17.7 0-32-14.3-32-32l0-288c0-17.7 14.3-32 32-32l104.5 0c9.5 0 18.5-4.2 24.6-11.5L256 41l62.9 75.5C325 123.8 334 128 343.5 128zM268.3 26.3s0 0 0 0L256 16l12.3 10.2s0 0 0 0zM168.5 96L64 96C28.7 96 0 124.7 0 160L0 448c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L343.5 96 268.3 5.8C265.3 2.1 260.7 0 256 0s-9.3 2.1-12.3 5.8L168.5 96z" />
    </Icon>
);

export default MessageMiddleTop;