
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=sharp-light inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 448l448 0 0-124.1-1-3.9-101.1 0-27.6 55.2-4.4 8.8-9.9 0-160 0-9.9 0-4.4-8.8L134.1 320 33 320l-1 3.9L32 448zM471 288L415 64 97 64 41 288l103 0 9.9 0 4.4 8.8L185.9 352l140.2 0 27.6-55.2 4.4-8.8 9.9 0 103 0zM0 448L0 320 72 32l368 0 72 288 0 128 0 32-32 0L32 480 0 480l0-32z" />
    </Icon>
);

export default Inbox;