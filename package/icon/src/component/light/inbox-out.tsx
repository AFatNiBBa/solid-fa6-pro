
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-out` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-out?s=light inbox-out}
 * @preview ![inbox-out](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/inbox-out.svg)
 */
const InboxOut: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 54.6l84.7 84.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-112-112c-6.2-6.2-16.4-6.2-22.6 0l-112 112c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L240 54.6 240 304c0 8.8 7.2 16 16 16s16-7.2 16-16l0-249.4zM48 352l66.3 0c6.1 0 11.6 3.4 14.3 8.8L143 389.5c8.1 16.3 24.8 26.5 42.9 26.5l140.2 0c18.2 0 34.8-10.3 42.9-26.5l-28.6-14.3L369 389.5l14.3-28.6c2.7-5.4 8.3-8.8 14.3-8.8l66.3 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16L48 480c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm306.7-5.5l-14.3 28.6c-2.7 5.4-8.2 8.8-14.3 8.8l-140.2 0c-6.1 0-11.6-3.4-14.3-8.8l-14.3-28.6c-8.1-16.3-24.8-26.5-42.9-26.5L48 320c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-66.3 0c-18.2 0-34.8 10.3-42.9 26.5z" />
    </Icon>
);

export default InboxOut;