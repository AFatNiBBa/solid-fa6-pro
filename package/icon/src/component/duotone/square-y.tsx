
import { Icon, generic } from "../../index";

/**
 * A component that renders the `square-y` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-y?s=duotone square-y}
 * @preview ![square-y](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/square-y.svg)
 */
const SquareY: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32C28.7 32 0 60.7 0 96zm96.1 69.5c.1-.8 .2-1.7 .4-2.5c.3-1.6 .9-3.3 1.6-4.8c1.4-3.1 3.5-6 6.2-8.3c10-8.7 25.2-7.6 33.9 2.4c28.6 33 57.2 66.1 85.9 99.1c28.6-33 57.2-66.1 85.9-99.1c4.7-5.5 11.4-8.3 18.1-8.3c5.6 0 11.2 1.9 15.7 5.9c10 8.7 11.1 23.8 2.4 33.9C313.4 221.5 280.7 259.2 248 297l0 79c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-2.2-2.2-3.9-4.8-5.1-7.6c-.6-1.4-1.1-2.9-1.4-4.5c-.2-1.2-.4-2.4-.4-2.4c-.1-1.2-.1-1.2-.1-2.5c0-26.4 0-52.7 0-79L101.9 183.7c-2-2.3-3.4-4.8-4.4-7.5c-.5-1.3-.9-2.7-1.1-4.1c-.2-1-.3-2.1-.3-2.1c-.1-1-.1-1-.1-2.1c0-.8 0-1 0-1.3c0-.4 .1-.8 .1-1.2z" />
        <path d="M104.3 149.9c10-8.7 25.2-7.6 33.9 2.4L224 251.4l85.9-99.1c8.7-10 23.8-11.1 33.9-2.4s11.1 23.8 2.4 33.9L248 297l0 79c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-79L101.9 183.7c-8.7-10-7.6-25.2 2.4-33.9z" />
    </Icon>
);

export default SquareY;