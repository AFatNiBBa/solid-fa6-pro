
import { Icon, generic } from "../../index";

/**
 * A component that renders the `image-portrait` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/image-portrait?s=duotone image-portrait}
 * @preview ![image-portrait](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/image-portrait.svg)
 */
const ImagePortrait: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0C28.7 0 0 28.7 0 64zM80 356.6l0-.4c0-.9 0-2 .1-3.2c.1-1.1 .1-2.3 .3-3.5c.2-2.3 .6-4.6 1-6.8c.9-4.5 2.3-8.8 4-12.9c3.5-8.2 8.5-15.6 14.7-21.8c12.4-12.4 29.6-20.1 48.5-20.1c29 0 57.9 0 86.9 0c37.9 0 68.6 30.7 68.6 68.6c0 15.1-12.3 27.4-27.4 27.4l-169.1 0c-7.6 0-14.4-3.1-19.4-8c-2.5-2.5-4.5-5.4-5.9-8.7c-.7-1.6-1.2-3.4-1.6-5.1c-.2-.9-.3-1.8-.4-2.7c-.1-.7-.1-1.4-.1-1.3l0-1.5zm48.3-171.1c.2-2.1 .5-4.3 1-6.3c.9-4.2 2.1-8.2 3.7-12c3.2-7.7 7.9-14.5 13.7-20.3C158.3 135.2 174.3 128 192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64c-17.7 0-33.7-7.2-45.3-18.7c-5.8-5.8-10.5-12.7-13.7-20.3c-1.6-3.8-2.9-7.8-3.7-12c-.4-2.1-.8-4.2-1-6.4c-.1-1.1-.2-2.1-.2-3.2c-.1-1.1-.1-2.2-.1-3.3l0-.4c0-.8 0-1.9 .1-2.9c.1-1.1 .1-2.2 .2-3.2z" />
        <path d="M192 256a64 64 0 1 0 0-128 64 64 0 1 0 0 128zm-43.4 32C110.7 288 80 318.7 80 356.6c0 15.1 12.3 27.4 27.4 27.4l169.1 0c15.1 0 27.4-12.3 27.4-27.4c0-37.9-30.7-68.6-68.6-68.6l-86.9 0z" />
    </Icon>
);

export default ImagePortrait;