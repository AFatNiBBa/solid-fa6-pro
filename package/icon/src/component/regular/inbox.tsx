
import { Icon } from "../../index";

/**
 * A component that renders the `inbox` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox?s=regular inbox}
 * @preview ![inbox](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/inbox.svg)
 */
const Inbox: typeof Icon = x => (
    <Icon {...x}>
        <path d="M48 336l81.2 0 20.9 41.9c6.8 13.6 20.6 22.1 35.8 22.1l140.2 0c15.1 0 29-8.6 35.8-22.1L382.8 336l81.2 0 0 80c0 8.8-7.2 16-16 16L64 432c-8.8 0-16-7.2-16-16l0-80zm406.5-48l-76.6 0c-15.1 0-29 8.6-35.8 22.1L321.2 352l-130.3 0-20.9-41.9c-6.8-13.6-20.6-22.1-35.8-22.1l-76.6 0 49-195.9C108.2 85 114.6 80 122 80L390 80c7.3 0 13.7 5 15.5 12.1l49 195.9zM0 327.9L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-88.1c0-5.2-.6-10.4-1.9-15.5l-58-231.9C445 52 419.4 32 390 32L122 32C92.6 32 67 52 59.9 80.5L1.9 312.4C.6 317.4 0 322.6 0 327.9z" />
    </Icon>
);

export default Inbox;