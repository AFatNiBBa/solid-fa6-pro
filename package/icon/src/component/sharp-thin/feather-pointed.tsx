
import { Icon } from "../../index";

/**
 * A component that renders the `feather-pointed` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/feather-pointed?s=sharp-thin feather-pointed}
 * @preview ![feather-pointed](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/feather-pointed.svg)
 */
const FeatherPointed: typeof Icon = x => (
    <Icon {...x}>
        <path d="M86.8 352.3c-13.5-49.9-13.3-134.2 61.9-209.3C191.3 100.3 260.8 70 331.9 49.6c60.6-17.4 120.6-27.2 162.3-31.8c-4.6 41.7-14.4 101.7-31.8 162.3c-4.3 14.8-8.9 29.5-14.1 43.9l-149.1 0 51.2-51.2 5.7-5.7-11.3-11.3-5.7 5.7L110 390.7c-11.1-12.1-19.5-24.6-23.2-38.4zm23.2 61c13.2 12.3 28.1 22.7 45.6 27.4c54.1 14.6 144.7 14 224.8-66.1c85.7-85.7 120.5-267.5 130.1-358.4C511.1 10.4 511.6 5 512 0c-5 .4-10.4 .9-16.2 1.5c-91 9.6-272.7 44.4-358.4 130.1C57.3 211.7 56.7 302.3 71.3 356.4C76 373.8 86.4 388.8 98.7 402L5.9 494.8 .2 500.5l11.3 11.3 5.7-5.7L110 413.3zM121.3 402l66-66 204.9 0c-7.3 10-15 19.1-23.2 27.3c-75.2 75.2-159.4 75.4-209.3 61.9c-13.8-3.7-26.3-12.1-38.4-23.2zm281.8-82l-199.8 0 80-80 159.1 0c-11.1 28.9-24.2 56.2-39.3 80z" />
    </Icon>
);

export default FeatherPointed;