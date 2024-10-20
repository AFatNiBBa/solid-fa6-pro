
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=sharp-thin inbox-in}
 * @preview ![inbox-in](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/inbox-in.svg)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 8l0 284.7L370.3 186.3l5.7-5.7L387.3 192l-5.7 5.7-120 120-5.7 5.7-5.7-5.7-120-120-5.7-5.7L136 180.7l5.7 5.7L248 292.7 248 8l0-8 16 0 0 8zM152 320l32 64 144 0 32-64 136 0 16 0 0 16 0 160 0 16-16 0L16 512 0 512l0-16L0 336l0-16 16 0 136 0zm190.3 71.2c-2.7 5.4-8.2 8.8-14.3 8.8l-144 0c-6.1 0-11.6-3.4-14.3-8.8L142.1 336 16 336l0 160 480 0 0-160-126.1 0-27.6 55.2z" />
    </Icon>
);

export default InboxIn;