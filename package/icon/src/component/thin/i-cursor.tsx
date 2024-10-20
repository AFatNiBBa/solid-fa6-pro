
import { Icon } from "../../index";

/**
 * A component that renders the `i-cursor` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/i-cursor?s=thin i-cursor}
 * @preview ![i-cursor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/i-cursor.svg)
 */
const ICursor: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M0 7.5c-.3 4.4 3 8.2 7.5 8.5l15.5 1C77.5 20.7 120 66 120 120.8L120 248l-56 0c-4.4 0-8 3.6-8 8s3.6 8 8 8l56 0 0 127.2C120 446 77.5 491.3 22.9 495L7.5 496c-4.4 .3-7.7 4.1-7.5 8.5s4.1 7.7 8.5 7.5L24 511c47.9-3.2 87.7-34.2 104-76.6c16.4 42.4 56.1 73.4 104 76.6l15.5 1c4.4 .3 8.2-3 8.5-7.5s-3-8.2-7.5-8.5l-15.5-1c-54.6-3.6-97.1-49-97.1-103.8L136 264l56 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-56 0 0-127.2C136 66 178.5 20.7 233.1 17l15.5-1c4.4-.3 7.7-4.1 7.5-8.5s-4.1-7.7-8.5-7.5L232 1c-47.9 3.2-87.7 34.2-104 76.6C111.6 35.2 71.9 4.2 24 1L8.5 0C4.1-.3 .3 3.1 0 7.5z" />
    </Icon>
);

export default ICursor;