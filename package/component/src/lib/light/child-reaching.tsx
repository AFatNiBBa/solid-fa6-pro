
import { Icon } from "../../index";

/**
 * A component that renders the `child-reaching` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-reaching?s=light child-reaching}
 * @preview ![child-reaching](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/child-reaching.svg)
 */
const ChildReaching: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M224 64a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm-96 0a64 64 0 1 1 128 0A64 64 0 1 1 128 64zM112 188c-27.8-14.9-51.4-37.4-67.5-65.8L34.1 103.9c-4.4-7.7-1.7-17.5 6-21.8s17.5-1.7 21.8 6l10.4 18.3c24.4 43 70.1 69.6 119.5 69.6c48.9 0 94.1-26 118.7-68.2l11.6-19.9c4.5-7.6 14.2-10.2 21.9-5.8s10.2 14.2 5.8 21.9l-11.6 19.9c-16 27.5-39.1 49.4-66.2 63.9L272 496c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-112-96 0 0 112c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-308zm32 13.1L144 352l96 0 0-151c-15.4 4.6-31.6 7-48.1 7c-16.4 0-32.5-2.4-47.9-6.9z" />
    </Icon>
);

export default ChildReaching;