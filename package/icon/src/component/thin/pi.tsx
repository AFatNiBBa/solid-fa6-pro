
import { Icon } from "../../index";

/**
 * A component that renders the `pi` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=thin pi}
 * @preview ![pi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/pi.svg)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M8 64c-4.4 0-8 3.6-8 8s3.6 8 8 8l120 0 0 179c0 63.6-21.6 125.3-61.4 174.9l-.9 1.1c-2.8 3.4-2.2 8.5 1.2 11.2s8.5 2.2 11.2-1.2l.9-1.1C121.1 391.4 144 326.2 144 259l0-179 160 0 0 310.6c0 31.7 25.7 57.4 57.4 57.4c21.8 0 41.6-12.3 51.4-31.8l2.3-4.7c2-4 .4-8.8-3.6-10.7s-8.8-.4-10.7 3.6l-2.3 4.7c-7 14-21.4 22.9-37.1 22.9c-22.9 0-41.4-18.6-41.4-41.4L320 80l120 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 64z" />
    </Icon>
);

export default Pi;