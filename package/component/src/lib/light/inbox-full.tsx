
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-full` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-full?s=light inbox-full}
 * @preview ![inbox-full](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/inbox-full.svg)
 */
const InboxFull: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 327.9L32 416c0 17.7 14.3 32 32 32l384 0c17.7 0 32-14.3 32-32l0-88.1c0-2.6-.3-5.2-1-7.8l0-.1-101.1 0-23.2 46.3c-5.4 10.8-16.5 17.7-28.6 17.7l-140.2 0c-12.1 0-23.2-6.8-28.6-17.7L134.1 320 33 320l0 .1c-.6 2.5-1 5.1-1 7.8zM421.1 88.2C417.5 74 404.7 64 390 64L122 64c-14.7 0-27.5 10-31 24.2L41 288l93.1 0c12.1 0 23.2 6.8 28.6 17.7L185.9 352l140.2 0 23.2-46.3c5.4-10.8 16.5-17.7 28.6-17.7l93.1 0L421.1 88.2zM0 416l0-88.1c0-5.2 .6-10.4 1.9-15.5l58-231.9C67 52 92.6 32 122 32L390 32c29.4 0 55 20 62.1 48.5l58 231.9c1.3 5.1 1.9 10.3 1.9 15.5l0 88.1c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64zM176 144l160 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-160 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-32 80l224 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default InboxFull;