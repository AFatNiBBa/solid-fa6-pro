
import { Icon, generic } from "../../index";

/**
 * A component that renders the `message-image` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-image?s=duotone message-image}
 * @preview ![message-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/message-image.svg)
 */
const MessageImage: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L185.6 508.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-80-96 0c-35.3 0-64-28.7-64-64L0 64zM98.4 306.4c4 8.3 12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144C311.5 132 304 128 296 128s-15.5 4-20 10.7l-56 84L202.7 201c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4zM112 128a32 32 0 1 0 64 0 32 32 0 1 0 -64 0z" />
        <path d="M144 160a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm172-21.3C311.5 132 304 128 296 128s-15.5 4-20 10.7l-56 84L202.7 201c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144z" />
    </Icon>
);

export default MessageImage;