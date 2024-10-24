
import { Icon } from "../../index";

/**
 * A component that renders the `pi` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pi?s=sharp-regular pi}
 * @preview ![pi](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/pi.svg)
 */
const Pi: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M24 64L0 64l0 48 24 0 88 0 0 249.4L75.4 422.9l41.2 24.6 40-67.2 3.4-5.7 0-6.6 0-256 144 0 0 312 0 24 24 0 72 0 15.5 0 6.4-14.2 14.4-32 9.8-21.9-43.8-19.7-9.8 21.9-8 17.8L352 400l0-288 72 0 24 0 0-48-24 0L24 64z" />
    </Icon>
);

export default Pi;