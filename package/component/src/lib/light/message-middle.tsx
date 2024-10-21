
import { Icon } from "../../index";

/**
 * A component that renders the `message-middle` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-middle?s=light message-middle}
 * @preview ![message-middle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-middle.svg)
 */
const MessageMiddle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M343.5 384L448 384c17.7 0 32-14.3 32-32l0-288c0-17.7-14.3-32-32-32L64 32C46.3 32 32 46.3 32 64l0 288c0 17.7 14.3 32 32 32l104.5 0c9.5 0 18.5 4.2 24.6 11.5L256 471l62.9-75.5C325 388.2 334 384 343.5 384zM268.3 485.7s0 0 0 0L256 496l12.3-10.2s0 0 0 0zM168.5 416L64 416c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-104.5 0-75.2 90.2c-3 3.6-7.5 5.8-12.3 5.8s-9.3-2.1-12.3-5.8L168.5 416z" />
    </Icon>
);

export default MessageMiddle;