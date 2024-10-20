
import { Icon } from "../../index";

/**
 * A component that renders the `message-pen` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-pen?s=sharp-thin message-pen}
 * @preview ![message-pen](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/message-pen.svg)
 */
const MessagePen: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 416l-16 0L16 416 0 416l0-16L0 16 0 0 16 0 496 0l16 0 0 16 0 384 0 16-16 0-192 0L176 501.3 160 512l0-19.2 0-60.8 0-16zm0-16l16 0 0 16 0 66.1 119.1-79.4 4-2.7 4.8 0 192 0 0-384L16 16l0 384 144 0zM300.5 112.3l.2-.2 40.1 40.1 11.3 11.3-11.3 11.3L220.9 294.7l-44.3 6.9L160 304.1l2.6-16.6 6.9-44.3 131-131zm.2 22.4L279.3 156l28.8 28.8 21.4-21.4-28.8-28.8zM184.5 250.9L179.2 285l34.1-5.3 83.5-83.5L268 167.3l-83.5 83.5z" />
    </Icon>
);

export default MessagePen;