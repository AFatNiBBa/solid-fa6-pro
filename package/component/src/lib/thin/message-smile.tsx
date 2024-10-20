
import { Icon } from "../../index";

/**
 * A component that renders the `message-smile` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-smile?s=thin message-smile}
 * @preview ![message-smile](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-smile.svg)
 */
const MessageSmile: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM192 176a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm128 0a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM161.2 250c-3.3 2.9-3.6 8-.6 11.3C184 287.5 218.1 304 256 304s72-16.5 95.4-42.7c2.9-3.3 2.7-8.3-.6-11.3s-8.3-2.7-11.3 .6C319 273.6 289.2 288 256 288s-63-14.4-83.5-37.3c-2.9-3.3-8-3.6-11.3-.6z" />
    </Icon>
);

export default MessageSmile;