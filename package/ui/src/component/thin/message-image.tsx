
import { Icon } from "../../index";

/**
 * A component that renders the `message-image` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/message-image?s=thin message-image}
 * @preview ![message-image](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/message-image.svg)
 */
const MessageImage: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 416c0-8.8-7.2-16-16-16l-96 0c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l384 0c26.5 0 48 21.5 48 48l0 288c0 26.5-21.5 48-48 48l-138.7 0c-3.5 0-6.8 1.1-9.6 3.2L176 496l0-80zM64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l80 0 16 0 0 16 0 64c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L309.3 416 448 416c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM168 128a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm-40-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm167.7 40c2.6 0 5 1.3 6.5 3.4L407.2 297.4c.5 .7 .8 1.5 .8 2.4c0 2.3-1.9 4.2-4.2 4.2l-296 0c-2.1 0-3.8-1.7-3.8-3.8c0-.9 .3-1.7 .8-2.4l56.5-70.6c1.6-2 4-3.1 6.5-3.1c2.6 0 5.1 1.2 6.7 3.3l19.1 25.5c1.5 2 3.8 3.2 6.3 3.2s4.8-1.1 6.4-3.1L289.5 147c1.5-1.9 3.8-3 6.2-3zm0-16c-7.3 0-14.3 3.4-18.8 9.1l-76.8 97.7-12.9-17.1c-4.6-6.1-11.8-9.7-19.5-9.7c-7.4 0-14.4 3.4-19 9.1L92.3 287.8c-2.8 3.5-4.3 7.9-4.3 12.4c0 11 8.9 19.8 19.8 19.8l296 0c11.1 0 20.2-9 20.2-20.2c0-4.1-1.3-8.2-3.6-11.6L315.3 138.2c-4.5-6.4-11.8-10.2-19.6-10.2z" />
    </Icon>
);

export default MessageImage;