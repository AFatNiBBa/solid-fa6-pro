
import { Icon } from "../../index";

/**
 * A component that renders the `alarm-exclamation` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/alarm-exclamation?s=thin alarm-exclamation}
 * @preview ![alarm-exclamation](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/alarm-exclamation.svg)
 */
const AlarmExclamation: typeof Icon = x => (
    <Icon {...x}>
        <path d="M93.7 0C42 0 0 42 0 93.7c0 18.5 5.4 35.8 14.6 50.3c2.4 3.7 7.3 4.8 11 2.4s4.8-7.3 2.4-11C20.4 123.4 16 109.1 16 93.7C16 50.8 50.8 16 93.7 16c20.4 0 39 7.9 52.8 20.7c3.2 3 8.3 2.8 11.3-.4s2.8-8.3-.4-11.3C140.7 9.5 118.3 0 93.7 0zM45.7 509.7l57.7-57.7C143.4 489.2 197 512 256 512s112.6-22.8 152.6-60.1l57.7 57.7c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-57.7-57.7C457.2 400.6 480 347 480 288C480 164.3 379.7 64 256 64S32 164.3 32 288c0 59 22.8 112.6 60.1 152.6L34.3 498.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0zM256 80a208 208 0 1 1 0 416 208 208 0 1 1 0-416zM418.3 0c-24.6 0-47 9.5-63.7 25c-3.2 3-3.4 8.1-.4 11.3s8.1 3.4 11.3 .4C379.3 23.9 397.9 16 418.3 16C461.2 16 496 50.8 496 93.7c0 15.4-4.4 29.7-12.1 41.7c-2.4 3.7-1.3 8.7 2.4 11s8.7 1.3 11-2.4c9.3-14.5 14.6-31.8 14.6-50.3C512 42 470 0 418.3 0zM272 384a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-8-216c0-4.4-3.6-8-8-8s-8 3.6-8 8l0 160c0 4.4 3.6 8 8 8s8-3.6 8-8l0-160z" />
    </Icon>
);

export default AlarmExclamation;