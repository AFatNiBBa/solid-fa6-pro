
import { Icon } from "../../index";

/**
 * A component that renders the `outlet` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/outlet?s=sharp-thin outlet}
 * @preview ![outlet](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/outlet.svg)
 */
const Outlet: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M16 48l0 416 416 0 0-416L16 48zM0 32l16 0 416 0 16 0 0 16 0 416 0 16-16 0L16 480 0 480l0-16L0 48 0 32zM80 256c0 39.4 15.7 67.9 31.5 86.7c7.9 9.5 15.9 16.4 21.8 21c2.3 1.8 4.3 3.2 5.8 4.3l169.9 0c1.5-1 3.5-2.5 5.8-4.3c5.9-4.6 13.8-11.6 21.8-21C352.3 323.9 368 295.4 368 256s-15.7-67.9-31.5-86.7c-7.9-9.5-15.9-16.4-21.8-21c-2.3-1.8-4.3-3.2-5.8-4.3l-169.9 0c-1.5 1-3.5 2.5-5.8 4.3c-5.9 4.6-13.8 11.6-21.8 21C95.7 188.1 80 216.6 80 256zm-16 0c0-88 70.4-128 70.4-128l179.2 0s70.4 40 70.4 128s-70.4 128-70.4 128l-179.2 0s-70.4-40-70.4-128zm104-64l0 8 0 64 0 8-16 0 0-8 0-64 0-8 16 0zm128 0l0 8 0 64 0 8-16 0 0-8 0-64 0-8 16 0zM240 304c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 16 32 0 0-16zm-48 0c0-17.7 14.3-32 32-32s32 14.3 32 32l0 16 0 16-16 0-32 0-16 0 0-16 0-16z" />
    </Icon>
);

export default Outlet;