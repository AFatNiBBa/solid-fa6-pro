
import { Icon } from "../../index";

/**
 * A component that renders the `ramp-loading` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ramp-loading?s=thin ramp-loading}
 * @preview ![ramp-loading](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ramp-loading.svg)
 */
const RampLoading: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M96 16l256 0c26.5 0 48 21.5 48 48l0 323.8 16 29.3 0-1.1 0-352c0-35.3-28.7-64-64-64L96 0C60.7 0 32 28.7 32 64l0 352 0 1.1 16-29.3L48 64c0-26.5 21.5-48 48-48zm67.1 272c-14.7 0-28.2 8.1-35.2 21L37.7 476.6c-8.6 16 3 35.4 21.1 35.4l330.4 0c18.2 0 29.7-19.4 21.1-35.4L320.1 309c-7-13-20.5-21-35.2-21l-121.8 0zM142 316.6c4.2-7.8 12.3-12.6 21.1-12.6l121.8 0c8.8 0 16.9 4.8 21.1 12.6l90.2 167.6c2.9 5.3-1 11.8-7 11.8L58.8 496c-6.1 0-9.9-6.5-7-11.8L142 316.6z" />
    </Icon>
);

export default RampLoading;