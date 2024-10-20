
import { Icon } from "../../index";

/**
 * A component that renders the `message-image` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-image?s=regular message-image}
 * @preview ![message-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/message-image.svg)
 */
const MessageImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492zm88-348c5.3 0 10.2 2.6 13.2 6.9l88 128c3.4 4.9 3.7 11.3 1 16.5s-8.2 8.6-14.2 8.6l-128 0-48 0-48 0c-6.1 0-11.6-3.4-14.3-8.8s-2.1-11.9 1.5-16.8l48-64c3-4 7.8-6.4 12.8-6.4s9.8 2.4 12.8 6.4l9.6 12.8 52.4-76.3c3-4.3 7.9-6.9 13.2-6.9zM176 112a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
    </Icon>
);

export default MessageImage;