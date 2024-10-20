
import { Icon } from "../../index";

/**
 * A component that renders the `bow-arrow` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bow-arrow?s=sharp-thin bow-arrow}
 * @preview ![bow-arrow](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bow-arrow.svg)
 */
const BowArrow: typeof Icon = x => (
    <Icon {...x}>
        <path d="M365.6 45.6L352 32l18.9-3.8L495 3.4 512 0l-3.4 17L483.8 141.1 480 160l-13.6-13.6-44.7-44.7-243 243L200 416l-83.2 83.1L104 512l-5.2-17.4L80 432 17.4 413.2 0 408l12.8-12.9L96 312l71.3 21.4 243-243L365.6 45.6zM160.8 348.2l-60.3-18.1L30.3 400.4l54.3 16.3 8.3 2.5 2.5 8.3 16.3 54.3 70.3-70.3-18.1-60.3-3-3zM470.2 127.5L491.6 20.4 384.5 41.8l85.7 85.7zM192 64c56.3 0 108.3 18.1 150.5 48.9l-11.5 11.5C291.8 96.4 243.8 80 192 80C136.8 80 85.9 98.7 45.3 130l140 140-11.3 11.3L10.3 117.7 4.7 112 16 100.7l5.7 5.7 12.3 12.3C77.5 84.4 132.3 64 192 64zM387.6 180.9l11.5-11.5C429.9 211.7 448 263.7 448 320c0 59.7-20.4 114.5-54.6 158.1l12.3 12.3 5.7 5.7L400 507.3l-5.7-5.7L230.6 337.9l11.3-11.3 140 140c31.4-40.6 50-91.4 50-146.7c0-51.8-16.4-99.8-44.4-139.1z" />
    </Icon>
);

export default BowArrow;