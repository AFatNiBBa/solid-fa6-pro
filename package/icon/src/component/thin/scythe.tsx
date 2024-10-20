
import { Icon } from "../../index";

/**
 * A component that renders the `scythe` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scythe?s=thin scythe}
 * @preview ![scythe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/scythe.svg)
 */
const Scythe: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M522.3 355.4l-26 121.3c-1.9 8.6 3.7 17.1 12.3 19s17.1-3.7 19-12.3l34.3-160 61.7-288c1.9-8.6-3.7-17.1-12.3-19s-17.1 3.7-19 12.3L536.1 291.4c-1.6 7.4-8.1 12.6-15.6 12.6L416 304c-8.8 0-16 7.2-16 16s7.2 16 16 16l90.7 0c4.8 0 9.4 2.2 12.4 5.9s4.2 8.7 3.2 13.4zM416 288l104.4 0L576.7 25.3C580.4 8 597.4-3 614.7 .7s28.3 20.7 24.6 38l-61.7 288-34.3 160c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38L503.3 368l3.4-16-16.4 0L416 352c-17.7 0-32-14.3-32-32s14.3-32 32-32zM352 0L552.6 0c-2.8 4.9-5 10.3-6.5 16L352 16C110.2 16 27 179.3 16 203.2c0 0 0 0 0 0c0 .1 0 .2 0 .6c0 2.3 1.8 4.1 4.1 4.1l484.7 0-3.4 16L20.1 224C9 224 0 215 0 203.9c0-2.6 .4-5 1.5-7.3C13.6 170.2 101.1 0 352 0z" />
    </Icon>
);

export default Scythe;