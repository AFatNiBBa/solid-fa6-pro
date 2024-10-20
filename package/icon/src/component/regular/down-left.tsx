
import { Icon } from "../../index";

/**
 * A component that renders the `down-left` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=regular down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M64 384l0-193.4c0-1.7 .8-3.2 2.1-4.2c2.1-1.6 5-1.4 6.9 .5L127 241c9.4 9.4 24.6 9.4 33.9 0L285.7 116.3c2.7-2.7 6.5-4.3 10.3-4.3s7.6 1.5 10.3 4.3l25.4 25.4c2.7 2.7 4.3 6.5 4.3 10.3s-1.5 7.6-4.3 10.3L207 287c-9.4 9.4-9.4 24.6 0 33.9L261.1 375c1.8 1.8 2.1 4.8 .5 6.9c-1 1.3-2.5 2.1-4.2 2.1L64 384zm-48 8c0 22.1 17.9 40 40 40l201.4 0c16.8 0 32.5-7.9 42.6-21.3c15.9-21.2 13.8-50.9-4.9-69.6L257.9 304 365.7 196.3C377.4 184.5 384 168.6 384 152s-6.6-32.5-18.3-44.3L340.3 82.4C328.5 70.6 312.6 64 296 64s-32.5 6.6-44.3 18.3L144 190.1 106.9 153c-18.7-18.7-48.4-20.8-69.6-5C23.9 158.1 16 173.9 16 190.6L16 392z" />
    </Icon>
);

export default DownLeft;