
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=thin inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M264 27.3L370.3 133.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0l-120 120c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L248 27.3 248 312c0 4.4 3.6 8 8 8s8-3.6 8-8l0-284.7zM48 336l74.3 0c12.1 0 23.2 6.8 28.6 17.7l9.9 19.8c8.1 16.3 24.8 26.5 42.9 26.5l104.4 0c18.2 0 34.8-10.3 42.9-26.5l9.9-19.8c5.4-10.8 16.5-17.7 28.6-17.7l74.3 0c17.7 0 32 14.3 32 32l0 96c0 17.7-14.3 32-32 32L48 496c-17.7 0-32-14.3-32-32l0-96c0-17.7 14.3-32 32-32zm298.7 10.5l-9.9 19.8c-5.4 10.8-16.5 17.7-28.6 17.7l-104.4 0c-12.1 0-23.2-6.8-28.6-17.7l-9.9-19.8c-8.1-16.3-24.8-26.5-42.9-26.5L48 320c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-74.3 0c-18.2 0-34.8 10.3-42.9 26.5z" />
    </Icon>
);

export default InboxOut;