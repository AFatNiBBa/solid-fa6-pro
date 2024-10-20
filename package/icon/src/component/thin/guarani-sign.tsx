
import { Icon } from "../../index";

/**
 * A component that renders the `guarani-sign` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/guarani-sign?s=thin guarani-sign}
 * @preview ![guarani-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/guarani-sign.svg)
 */
const GuaraniSign: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M184 0c-4.4 0-8 3.6-8 8l0 56.7C77.4 72.8 0 155.3 0 256S77.4 439.2 176 447.3l0 56.7c0 4.4 3.6 8 8 8s8-3.6 8-8l0-56c106 0 192-86 192-192c0-4.4-3.6-8-8-8l-184 0 0-168c48 0 91.4 19.2 123.2 50.3c3.2 3.1 8.2 3 11.3-.1s3-8.2-.1-11.3C291.8 84.9 244.3 64 192 64l0-56c0-4.4-3.6-8-8-8zm-8 80.7l0 350.6C86.3 423.2 16 347.8 16 256S86.3 88.8 176 80.7zM192 432l0-168 175.8 0c-4.2 93.5-81.3 168-175.8 168z" />
    </Icon>
);

export default GuaraniSign;