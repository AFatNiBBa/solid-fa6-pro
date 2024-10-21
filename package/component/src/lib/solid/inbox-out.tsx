
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=solid inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M288 109.3L288 288c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-178.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM48 320l76.2 0c12.1 0 23.2 6.8 28.6 17.7l14.3 28.6c5.4 10.8 16.5 17.7 28.6 17.7l120.4 0c12.1 0 23.2-6.8 28.6-17.7l14.3-28.6c5.4-10.8 16.5-17.7 28.6-17.7l76.2 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48z" />
    </Icon>
);

export default InboxOut;