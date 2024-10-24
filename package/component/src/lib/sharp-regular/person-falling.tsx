
import { Icon } from "../../index";

/**
 * A component that renders the `person-falling` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-falling?s=sharp-regular person-falling}
 * @preview ![person-falling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-falling.svg)
 */
const PersonFalling: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 24l0-24L272 0l0 24 0 88.5L110.1 186.1 96 192.5 96 208l0 152 0 24 48 0 0-24 0-112.2L307.9 501 348.2 475 263.6 344.3 327 304l46.3 0 64.8 72.1 16.1 17.8 35.7-32.1-16.1-17.8-72-80-7.2-7.9L384 256l-63.7 0-.6 0-19 0-53.8-79.3 59-26.8 14.1-6.4 0-15.5 0-104zM263.9 287.2L237.5 304 176 208.9l26.6-12.1 61.3 90.4zM112 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default PersonFalling;