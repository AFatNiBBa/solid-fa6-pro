
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-regular inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 336l0 96 416 0 0-96-81.2 0-25.4 50.7L350.8 400 336 400l-160 0-14.8 0-6.6-13.3L129.2 336 48 336zm406.5-48l-52-208-293 0-52 208 86.5 0 14.8 0 6.6 13.3L190.8 352l130.3 0 25.4-50.7 6.6-13.3 14.8 0 86.5 0zM0 432L0 320 72 32l368 0 72 288 0 112 0 48-48 0L48 480 0 480l0-48z" />
    </Icon>
);

export default Inbox;