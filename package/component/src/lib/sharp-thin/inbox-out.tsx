
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=sharp-thin inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 312l0 8-16 0 0-8 0-276.7L141.7 141.7l-5.7 5.7L124.7 136l5.7-5.7 120-120L256 4.7l5.7 5.7 120 120 5.7 5.7L376 147.3l-5.7-5.7L264 35.3 264 312zm-112 8l32 64 144 0 32-64 136 0 16 0 0 16 0 160 0 16-16 0L16 512 0 512l0-16L0 336l0-16 16 0 136 0zm190.3 71.2c-2.7 5.4-8.2 8.8-14.3 8.8l-144 0c-6.1 0-11.6-3.4-14.3-8.8L142.1 336 16 336l0 160 480 0 0-160-126.1 0-27.6 55.2z" />
    </Icon>
);

export default InboxOut;