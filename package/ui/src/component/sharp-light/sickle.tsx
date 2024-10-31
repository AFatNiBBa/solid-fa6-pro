
import { Icon } from "../../index";

/**
 * A component that renders the `sickle` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/sickle?s=sharp-light sickle}
 * @preview ![sickle](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/sickle.svg)
 */
const Sickle: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 0C214 0 128 86 128 192c0 71 38.5 132.9 95.7 166.1l10.6 6.2 8.7-8.7 36-36 9-9-6.8-10.8C270.3 282.5 264 262 264 240c0-61.9 50.1-112 112-112c48.1 0 89.1 30.3 105 72.9l31-5.3c0-1.2 0-2.4 0-3.6C512 86 426 0 320 0zM160 192c0-88.4 71.6-160 160-160c65.7 0 122.1 39.6 146.8 96.2C442 108.1 410.4 96 376 96c-79.5 0-144 64.5-144 144c0 23.6 5.7 45.9 15.8 65.6l-18.3 18.3C187.5 295.1 160 246.7 160 192zm-56 97.4L81.4 312l11.3 11.3 4.7 4.7L12.7 412.7 1.4 424l11.3 11.3 64 64L88 510.6l11.3-11.3L184 414.6l4.7 4.7L200 430.6 222.6 408l-11.3-11.3-4.7-4.7-11.3-11.3-64-64L120 305.4l-4.7-4.7L104 289.4zm16 61.3L161.4 392 88 465.4 46.6 424 120 350.6z" />
    </Icon>
);

export default Sickle;