
import { Icon } from "../../index";

/**
 * A component that renders the `message-image` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-image?s=light message-image}
 * @preview ![message-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/message-image.svg)
 */
const MessageImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M192 416c0-17.7-14.3-32-32-32l-96 0c-17.7 0-32-14.3-32-32L32 64c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32l0 288c0 17.7-14.3 32-32 32l-138.7 0c-6.9 0-13.7 2.2-19.2 6.4L192 464l0-48zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l64 0 32 0 0 32 0 48c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zm88 128a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm110.5 12.7L208 213.3l-6.5-8.7c-6-8-15.4-12.7-25.3-12.7c-10.3 0-20 5-26 13.5l-49.1 70.2c-3.3 4.7-5.1 10.4-5.1 16.2c0 15.6 12.6 28.2 28.2 28.2l263.7 0c15.5 0 28.1-12.6 28.1-28.1c0-5.9-1.9-11.7-5.3-16.4l-97-134.3c-6-8.3-15.6-13.2-25.8-13.2c-10 0-19.4 4.7-25.5 12.7zm-86.3 83.5l19 25.4c3 4 7.8 6.4 12.8 6.4s9.8-2.4 12.8-6.4l67.1-89.5L380.3 288l-248.7 0 44.6-63.8z" />
    </Icon>
);

export default MessageImage;