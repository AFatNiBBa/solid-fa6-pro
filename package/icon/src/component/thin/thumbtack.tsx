
import { Icon } from "../../index";

/**
 * A component that renders the `thumbtack` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/thumbtack?s=thin thumbtack}
 * @preview ![thumbtack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/thumbtack.svg)
 */
const Thumbtack: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M110.3 17.6L92.4 197c-.5 4.8-3.1 9.1-7.2 11.8c-30.5 20-53.7 50.8-63.6 88l-5.1 19c-1.3 4.8-.3 9.9 2.8 13.9L6.7 339.4l12.6-9.7c3 3.9 7.7 6.3 12.7 6.3l152 0 0-104c0-4.4 3.6-8 8-8s8 3.6 8 8l0 104 152 0c5 0 9.7-2.3 12.7-6.3s4.1-9.1 2.8-13.9l-5.1-19c-9.9-37.2-33.1-68-63.6-88c-4-2.6-6.7-7-7.2-11.8L273.7 17.6c-.1-.5-.1-1.1-.1-1.6L110.4 16c0 .5 0 1.1-.1 1.6zM184 352L32 352c-9.9 0-19.3-4.6-25.4-12.5s-8.1-18.1-5.5-27.7l5.1-19c11-41.1 36.6-75.2 70.3-97.3L92.8 32l1.6-16L78.3 16 48 16c-4.4 0-8-3.6-8-8s3.6-8 8-8L94.4 0 96 0 288 0l1.6 0L336 0c4.4 0 8 3.6 8 8s-3.6 8-8 8l-30.3 0-16.1 0 1.6 16 16.3 163.4c33.7 22.1 59.3 56.2 70.3 97.3l5.1 19c2.6 9.6 .5 19.9-5.5 27.7s-15.4 12.5-25.4 12.5l-152 0 0 152c0 4.4-3.6 8-8 8s-8-3.6-8-8l0-152z" />
    </Icon>
);

export default Thumbtack;