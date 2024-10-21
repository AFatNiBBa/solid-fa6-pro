
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=thin inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M16 416l0-88.1c0-2.6 .2-5.3 .7-7.9l101.5 0c3 0 5.8 1.7 7.2 4.4l23.2 46.3c4.1 8.1 12.4 13.3 21.5 13.3l172.2 0c9.1 0 17.4-5.1 21.5-13.3l23.2-46.3c1.4-2.7 4.1-4.4 7.2-4.4l101.5 0c.4 2.6 .6 5.2 .6 7.9l0 88.1c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48zM491.5 304l-97.6 0c-9.1 0-17.4 5.1-21.5 13.3l-23.2 46.3c-1.4 2.7-4.1 4.4-7.2 4.4l-172.2 0c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3l-97.6 0L75.4 84.4C80.7 63 99.9 48 122 48L390 48c22 0 41.2 15 46.6 36.4L491.5 304zM0 327.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-88.1c0-5.2-.6-10.4-1.9-15.5l-58-231.9C445 52 419.4 32 390 32L122 32C92.6 32 67 52 59.9 80.5L1.9 312.4C.6 317.4 0 322.6 0 327.9z" />
    </Icon>
);

export default Inbox;