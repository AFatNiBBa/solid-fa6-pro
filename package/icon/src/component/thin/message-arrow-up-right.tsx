
import { Icon } from "../../index";

/**
 * A component that renders the `message-arrow-up-right` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-arrow-up-right?s=thin message-arrow-up-right}
 * @preview ![message-arrow-up-right](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-arrow-up-right.svg)
 */
const MessageArrowUpRight: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM200 120c-4.4 0-8 3.6-8 8s3.6 8 8 8l108.7 0L170.3 274.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L320 147.3 320 256c0 4.4 3.6 8 8 8s8-3.6 8-8l0-128c0-4.4-3.6-8-8-8l-128 0z" />
    </Icon>
);

export default MessageArrowUpRight;