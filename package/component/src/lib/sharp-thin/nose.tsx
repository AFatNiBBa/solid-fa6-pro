
import { Icon } from "../../index";

/**
 * A component that renders the `nose` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/nose?s=sharp-thin nose}
 * @preview ![nose](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/nose.svg)
 */
const Nose: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M169.8 13L432 338.8 432 496l-140.7 0-5.7-5.7-72-72-2.3-2.3-3.3 0-32 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l264 0 8 0 0-8 0-168 0-2.8-1.8-2.2L182.2 3 169.8 13zm34.9 419l64 64L176 496c-17.7 0-32-14.3-32-32s14.3-32 32-32l28.7 0zm-83-128.2l7.8-1.7-3.4-15.6-7.8 1.7-22.8 4.9C39.8 305 0 354.2 0 411.2C0 447 15.9 481 43.5 504l7.4 6.2 10.2-12.3-7.4-6.2C29.8 471.8 16 442.3 16 411.2c0-49.4 34.5-92.1 82.8-102.5l22.8-4.9z" />
    </Icon>
);

export default Nose;