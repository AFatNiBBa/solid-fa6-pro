
import { Icon, generic } from "../../index";

/**
 * A component that renders the `star-exclamation` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/star-exclamation?s=duotone star-exclamation}
 * @preview ![star-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/star-exclamation.svg)
 */
const StarExclamation: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M25.7 193.1c-3.8 11.5-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c4.7 2.5 9.9 3.8 15.1 3.8c6.6 0 13.1-2 18.7-6c9.9-7.1 14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c6.2-6.1 9.5-14.3 9.5-22.7c0-3.3-.5-6.7-1.6-10c-3.8-11.5-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7zM320 352a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zM264 152c0-13.3 10.7-24 24-24s24 10.7 24 24l0 112c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-112z" />
        <path d="M312 152c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 112c0 13.3 10.7 24 24 24s24-10.7 24-24l0-112zM288 384a32 32 0 1 0 0-64 32 32 0 1 0 0 64z" />
    </Icon>
);

export default StarExclamation;