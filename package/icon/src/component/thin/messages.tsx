
import { Icon } from "../../index";

/**
 * A component that renders the `messages` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/messages?s=thin messages}
 * @preview ![messages](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/messages.svg)
 */
const Messages: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M202.7 304L352 304c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48L64 16C37.5 16 16 37.5 16 64l0 192c0 26.5 21.5 48 48 48l32 0c8.8 0 16 7.2 16 16l0 48 81.1-60.8c2.8-2.1 6.1-3.2 9.6-3.2zM352 320l-149.3 0-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-32 0-16-16 0-16 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L352 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64zM320 448c-35.3 0-64-28.7-64-64l0-32 16 0 0 32c0 26.5 21.5 48 48 48l117.3 0c3.5 0 6.8 1.1 9.6 3.2L528 496l0-48c0-8.8 7.2-16 16-16l32 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48l-128 0 0-16 128 0c35.3 0 64 28.7 64 64l0 192c0 35.3-28.7 64-64 64l-16 0-16 0 0 16 0 32c0 6.1-3.4 11.6-8.8 14.3s-11.9 2.1-16.8-1.5L437.3 448 320 448z" />
    </Icon>
);

export default Messages;