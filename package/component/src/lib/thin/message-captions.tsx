
import { Icon } from "../../index";

/**
 * A component that renders the `message-captions` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-captions?s=thin message-captions}
 * @preview ![message-captions](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-captions.svg)
 */
const MessageCaptions: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zm8 240c-4.4 0-8 3.6-8 8s3.6 8 8 8l240 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L72 240zm304 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l64 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-64 0zM72 304c-4.4 0-8 3.6-8 8s3.6 8 8 8l96 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-96 0zm160 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l208 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-208 0z" />
    </Icon>
);

export default MessageCaptions;