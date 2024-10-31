
import { Icon } from "../../index";

/**
 * A component that renders the `down-left` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/down-left?s=thin down-left}
 * @preview ![down-left](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/down-left.svg)
 */
const DownLeft: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M48 416c-8.8 0-16-7.2-16-16l0-235.7c0-11.2 9.1-20.3 20.3-20.3c5.4 0 10.5 2.1 14.3 5.9l75.7 75.7c3.1 3.1 8.2 3.1 11.3 0L290.3 89c5.7-5.7 13.5-9 21.7-9s15.9 3.2 21.7 9L359 114.4c5.7 5.7 9 13.5 9 21.7s-3.2 15.9-9 21.7L222.3 294.3c-1.5 1.5-2.3 3.5-2.3 5.7s.8 4.2 2.3 5.7l75.7 75.7c3.8 3.8 5.9 9 5.9 14.3c0 11.2-9.1 20.3-20.3 20.3L48 416zM16 400c0 17.7 14.3 32 32 32l235.7 0c20 0 36.3-16.2 36.3-36.3c0-9.6-3.8-18.9-10.6-25.7L239.3 300l131-131c8.7-8.7 13.7-20.6 13.7-33s-4.9-24.2-13.7-33L345 77.7C336.2 68.9 324.4 64 312 64s-24.2 4.9-33 13.7l-131 131L77.9 138.6c-6.8-6.8-16-10.6-25.7-10.6c-20 0-36.3 16.2-36.3 36.3L16 400z" />
    </Icon>
);

export default DownLeft;