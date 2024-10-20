
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=regular inbox-in}
 * @preview ![inbox-in](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/inbox-in.svg)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M280 24l0 206.1 63-63c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 305c-9.4 9.4-24.6 9.4-33.9 0L135 201c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l63 63L232 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM149.1 405.5L130.3 368 48 368l0 96 416 0 0-96-82.3 0-18.7 37.5C354.8 421.7 338.2 432 320 432l-128 0c-18.2 0-34.8-10.3-42.9-26.5zm24.2-58.9L192 384l128 0 18.7-37.5c8.1-16.3 24.8-26.5 42.9-26.5l82.3 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l82.3 0c18.2 0 34.8 10.3 42.9 26.5z" />
    </Icon>
);

export default InboxIn;