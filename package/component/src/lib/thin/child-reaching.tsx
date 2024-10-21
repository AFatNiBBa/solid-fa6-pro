
import { Icon } from "../../index";

/**
 * A component that renders the `child-reaching` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/child-reaching?s=thin child-reaching}
 * @preview ![child-reaching](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/child-reaching.svg)
 */
const ChildReaching: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M192 16a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm0 112A64 64 0 1 0 192 0a64 64 0 1 0 0 128zm0 48c-49.6 0-96.1-23.9-125-64.2L46.5 83.3c-2.6-3.6-7.6-4.4-11.2-1.8s-4.4 7.6-1.8 11.2L54 121.2C85.9 165.6 137.3 192 192 192s106.1-26.4 138-70.8l20.5-28.5c2.6-3.6 1.8-8.6-1.8-11.2s-8.6-1.8-11.2 1.8L317 111.8C288.1 152.1 241.6 176 192 176zm-64 56c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 248c0 17.7 14.3 32 32 32s32-14.3 32-32l0-80c0-8.8 7.2-16 16-16s16 7.2 16 16l0 80c0 17.7 14.3 32 32 32s32-14.3 32-32l0-248c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 248c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 80c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-248z" />
    </Icon>
);

export default ChildReaching;