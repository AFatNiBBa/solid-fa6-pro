
import { Icon } from "../../index";

/**
 * A component that renders the `heart-circle-exclamation` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-exclamation?s=sharp-thin heart-circle-exclamation}
 * @preview ![heart-circle-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/heart-circle-exclamation.svg)
 */
const HeartCircleExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M256 118.6l-11.3-11.3L220.5 83.1C198 60.6 167.5 48 135.8 48C69.6 48 16 101.6 16 167.8c0 31.8 12.6 62.2 35.1 84.7l24.2 24.2L256 457.4l16-16c2.3 5.1 4.9 10.1 7.7 14.9l-12.4 12.4L256 480l-11.3-11.3L64 288 39.8 263.8C14.3 238.3 0 203.8 0 167.8C0 92.8 60.8 32 135.8 32c36 0 70.5 14.3 96 39.8l12.9 12.9L256 96l11.3-11.3 12.9-12.9c25.5-25.5 60-39.8 96-39.8C451.2 32 512 92.8 512 167.8c0 13.8-2.1 27.4-6.2 40.4c-4.8-2.2-9.8-4.3-14.9-6.1c3.3-11 5-22.6 5-34.3C496 101.6 442.4 48 376.2 48c-31.8 0-62.2 12.6-84.7 35.1l-24.2 24.2L256 118.6zM560 368a128 128 0 1 0 -256 0 128 128 0 1 0 256 0zm-272 0a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm156 76l-24 0 0-24 24 0 0 24zm-4-164l0 8 0 96 0 8-16 0 0-8 0-96 0-8 16 0z" />
    </Icon>
);

export default HeartCircleExclamation;