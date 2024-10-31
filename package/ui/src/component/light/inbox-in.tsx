
import { Icon } from "../../index";

/**
 * A component that renders the `inbox-in` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/inbox-in?s=light inbox-in}
 * @preview ![inbox-in](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/inbox-in.svg)
 */
const InboxIn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 16c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 249.4-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l112 112c6.2 6.2 16.4 6.2 22.6 0l112-112c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L272 265.4 272 16zM48 352l66.3 0c6.1 0 11.6 3.4 14.3 8.8L143 389.5c8.1 16.3 24.8 26.5 42.9 26.5l140.2 0c18.2 0 34.8-10.3 42.9-26.5l-28.6-14.3L369 389.5l14.3-28.6c2.7-5.4 8.3-8.8 14.3-8.8l66.3 0c8.8 0 16 7.2 16 16l0 96c0 8.8-7.2 16-16 16L48 480c-8.8 0-16-7.2-16-16l0-96c0-8.8 7.2-16 16-16zm306.7-5.5l-14.3 28.6c-2.7 5.4-8.2 8.8-14.3 8.8l-140.2 0c-6.1 0-11.6-3.4-14.3-8.8l-14.3-28.6c-8.1-16.3-24.8-26.5-42.9-26.5L48 320c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48l416 0c26.5 0 48-21.5 48-48l0-96c0-26.5-21.5-48-48-48l-66.3 0c-18.2 0-34.8 10.3-42.9 26.5z" />
    </Icon>
);

export default InboxIn;