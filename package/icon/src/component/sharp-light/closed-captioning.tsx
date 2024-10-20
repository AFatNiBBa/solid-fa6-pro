
import { Icon } from "../../index";

/**
 * A component that renders the `closed-captioning` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/closed-captioning?s=sharp-light closed-captioning}
 * @preview ![closed-captioning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/closed-captioning.svg)
 */
const ClosedCaptioning: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 64l0 384L32 448 32 64l512 0zM32 32L0 32 0 64 0 448l0 32 32 0 512 0 32 0 0-32 0-384 0-32-32 0L32 32zM200 192c21.9 0 41.2 11 52.8 27.8l26.4-18.1C261.8 176.5 232.9 160 200 160c-53 0-96 43-96 96s43 96 96 96c32.9 0 61.8-16.5 79.1-41.6l-26.4-18.1C241.2 309 221.9 320 200 320c-35.3 0-64-28.7-64-64s28.7-64 64-64zm128 64c0-35.3 28.7-64 64-64c21.9 0 41.2 11 52.8 27.8l26.4-18.1C453.8 176.5 424.9 160 392 160c-53 0-96 43-96 96s43 96 96 96c32.9 0 61.8-16.5 79.1-41.6l-26.4-18.1C433.2 309 413.9 320 392 320c-35.3 0-64-28.7-64-64z" />
    </Icon>
);

export default ClosedCaptioning;