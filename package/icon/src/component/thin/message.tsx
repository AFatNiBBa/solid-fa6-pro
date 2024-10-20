
import { Icon } from "../../index";

/**
 * A component that renders the `message` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message?s=thin message}
 * @preview ![message](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message.svg)
 */
const Message: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 400c8.8 0 16 7.2 16 16l0 80 123.7-92.8c2.8-2.1 6.1-3.2 9.6-3.2L448 400c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L64 16C37.5 16 16 37.5 16 64l0 288c0 26.5 21.5 48 48 48l96 0zM0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-64 0-16-16 0-80 0c-35.3 0-64-28.7-64-64L0 64z" />
    </Icon>
);

export default Message;