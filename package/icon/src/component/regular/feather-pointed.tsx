
import { Icon } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=regular feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M117.7 343.9c-11.2-41.4-11.7-113 53.7-178.3c38.1-38.1 93.7-66.3 152.8-85.7c50.6-16.7 100.7-26 138.3-30.3c-4.3 37.6-13.6 87.7-30.3 138.3c-2.2 6.8-4.6 13.5-7 20.1l-87.2 0 7.9-7.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L122.8 355.2c-2.6-4.1-4.2-7.9-5.1-11.3zm4.6 79.7c10 7.6 21 13.7 33.3 17c54.1 14.6 144.7 14 224.8-66.1C471.5 283.5 505 120.5 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4c3.3 12.2 9.4 23.2 17 33.3L7 471c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l81.3-81.3zm34.5-34.5L193.9 352l140.4 0c-61.9 53.9-127.3 52.9-166.2 42.3c-3.5-.9-7.2-2.6-11.3-5.2zm220-85.2l-134.8 0 48-48 114.7 0c-8.4 17-17.7 33.2-27.9 48z" />
    </Icon>
);

export default FeatherPointed;