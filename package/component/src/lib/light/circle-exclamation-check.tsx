
import { Icon } from "../../index";

/**
 * A component that renders the `circle-exclamation-check` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/circle-exclamation-check?s=light circle-exclamation-check}
 * @preview ![circle-exclamation-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/circle-exclamation-check.svg)
 */
const CircleExclamationCheck: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 256C32 132.3 132.3 32 256 32c95.3 0 176.7 59.5 209.1 143.4c3.2 8.2 12.4 12.4 20.7 9.2s12.4-12.4 9.2-20.7C458 68 364.9 0 256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c75.8 0 144-33 190.8-85.3c5.9-6.6 5.3-16.7-1.3-22.6s-16.7-5.3-22.6 1.3c-41 45.9-100.6 74.7-167 74.7C132.3 480 32 379.7 32 256zM272 144c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 128c0 8.8 7.2 16 16 16s16-7.2 16-16l0-128zM256 376a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM619.3 180.7c-6.2-6.2-16.4-6.2-22.6 0L480 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128c6.2-6.2 6.2-16.4 0-22.6z" />
    </Icon>
);

export default CircleExclamationCheck;