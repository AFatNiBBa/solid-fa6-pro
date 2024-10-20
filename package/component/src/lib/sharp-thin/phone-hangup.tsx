
import { Icon } from "../../index";

/**
 * A component that renders the `phone-hangup` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/phone-hangup?s=sharp-thin phone-hangup}
 * @preview ![phone-hangup](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/phone-hangup.svg)
 */
const PhoneHangup: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M416 256l0 104 160 32 64-144c-37.3-48-153.6-144-320-144S37.3 200 0 248L64 392l160-32 0-104c62.3-20.8 129.7-20.8 192 0zM208 346.9L73.4 373.8 18.6 250.5C59.3 203.5 167.9 120 320 120s260.7 83.5 301.4 130.5L566.6 373.8 432 346.9l0-90.9 0-11.5-10.9-3.6c-65.6-21.9-136.5-21.9-202.1 0L208 244.5l0 11.5 0 90.9z" />
    </Icon>
);

export default PhoneHangup;