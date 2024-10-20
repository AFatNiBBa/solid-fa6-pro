
import { Icon } from "../../index";

/**
 * A component that renders the `square-phone` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-phone?s=thin square-phone}
 * @preview ![square-phone](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/square-phone.svg)
 */
const SquarePhone: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 48C37.5 48 16 69.5 16 96l0 320c0 26.5 21.5 48 48 48l320 0c26.5 0 48-21.5 48-48l0-320c0-26.5-21.5-48-48-48L64 48zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zm156.8 40.4l-44 12c-5.2 1.4-8.8 6.2-8.8 11.6c0 119.3 96.7 216 216 216c5.4 0 10.2-3.6 11.6-8.8l12-44c1.6-5.8-1.4-11.9-7-14.2l-48-20c-4.9-2-10.5-.6-13.9 3.5l-20.2 24.7c-2.3 2.8-6.3 3.7-9.6 2.2c-36.9-17.4-66.7-47.3-84.2-84.2c-1.6-3.3-.7-7.3 2.2-9.6l24.7-20.2c4.1-3.4 5.5-9 3.5-13.9l-20-48c-2.3-5.6-8.4-8.5-14.2-7zm29 .8l20 48c4.8 11.4 1.5 24.6-8.1 32.4L178 233.8c15.2 29.1 39.1 53 68.2 68.2l16.1-19.7c7.8-9.6 21-12.9 32.4-8.1l48 20c13 5.4 19.9 19.6 16.2 33.2l-12 44c-3.3 12.2-14.4 20.6-27 20.6C191.9 392 88 288.1 88 160c0-12.6 8.5-23.7 20.6-27l44-12c13.6-3.7 27.8 3.3 33.2 16.2z" />
    </Icon>
);

export default SquarePhone;