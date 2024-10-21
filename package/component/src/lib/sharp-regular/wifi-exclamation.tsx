
import { Icon } from "../../index";

/**
 * A component that renders the `wifi-exclamation` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wifi-exclamation?s=sharp-regular wifi-exclamation}
 * @preview ![wifi-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/wifi-exclamation.svg)
 */
const WifiExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M344 56l0-24-48 0 0 24 0 256 0 24 48 0 0-24 0-256zM1.2 155.9l32.4 35.4C96.1 134 175.8 95.3 264 83.7L264 56l0-20.7C163.3 47.2 72.3 90.8 1.2 155.9zM119.4 286.4l32.5 35.3C183 293 221.4 272.2 264 262.3l0-49.1c-55.2 10.6-104.9 36.5-144.6 73.1zM376 213.3l0 49.1c42.6 9.8 81 30.6 112.1 59.3l32.5-35.3c-39.7-36.6-89.4-62.5-144.6-73.1zM264 424a56 56 0 1 0 112 0 56 56 0 1 0 -112 0zM376 56l0 27.7C464.2 95.3 543.9 134 606.3 191.3l32.4-35.4C567.7 90.8 476.7 47.2 376 35.3L376 56z" />
    </Icon>
);

export default WifiExclamation;