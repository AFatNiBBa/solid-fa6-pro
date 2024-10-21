
import { Icon } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=thin feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.8 352.3c-13.5-49.9-13.3-134.2 61.9-209.3c43.1-43.1 104-73.2 165.4-93.5c61.2-20.2 121.7-30.1 162.4-33.4c5-.4 10.1 1.5 14 5.4s5.8 9.1 5.4 14c-3.3 40.8-13.2 101.2-33.4 162.4c-2.9 8.7-6 17.4-9.2 26.1l-154 0 51.2-51.2c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L110 390.7c-11.1-12.1-19.5-24.6-23.2-38.4zm23.2 61c13.2 12.3 28.1 22.7 45.5 27.4c54.1 14.6 144.7 14 224.8-66.1C471.5 283.5 505 120.5 511.9 36.8c.8-9.9-3-19.6-10-26.6s-16.7-10.8-26.6-10C391.5 7 228.5 40.5 137.4 131.6C57.3 211.7 56.7 302.3 71.3 356.4C76 373.8 86.4 388.8 98.7 402L2.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L110 413.3zM121.3 402l66-66L393 336c-7.5 9.7-15.4 18.8-23.9 27.3c-75.2 75.2-159.4 75.4-209.3 61.9c-13.8-3.7-26.3-12.1-38.4-23.2zm283.2-82l-201.2 0 80-80L447 240c-11.7 28.2-25.7 55.5-42.4 80z" />
    </Icon>
);

export default FeatherPointed;