
import { Icon } from "../../index";

/**
 * A component that renders the `person-sign` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-sign?s=sharp-regular person-sign}
 * @preview ![person-sign](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-sign.svg)
 */
const PersonSign: typeof Icon = x => (
    <Icon {...x}>
        <path d="M144 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM88 128l-15.6 0-6.3 14.3-64 144 43.9 19.5L80 229.1 80 488l0 24 48 0 0-24 0-136 52.2 0L208 413.2l0 74.8 0 24 48 0 0-24 0-80 0-5.2-2.2-4.7L216 314.8l0-104.4L245.3 247l4.1 5.2 6.2 2.3 44.5 16.7-11 30.3L280.8 324l45.1 16.4 8.2-22.6 45-123.7 35 13 45 16.7 16.1-45.2L512 75.6 433 46.2l10-27.4L397.9 2.4 388 29.5 353.8 16.7 308.8 0 292.7 45.2 256 148.4l78.2 29.1L316.5 226l-37.9-14.2L218.7 137l-7.2-9L200 128 88 128zm80 176l-40 0 0-128 40 0 0 128zM337.7 62l113.2 42.1L430.3 162 317.1 119.9 337.7 62z" />
    </Icon>
);

export default PersonSign;