
import { Icon } from "../../index";

/**
 * A component that renders the `person-dolly` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dolly?s=sharp-light person-dolly}
 * @preview ![person-dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/person-dolly.svg)
 */
const PersonDolly: typeof Icon = x => (
    <Icon {...x}>
        <path d="M56 56a24 24 0 1 1 48 0A24 24 0 1 1 56 56zm80 0A56 56 0 1 0 24 56a56 56 0 1 0 112 0zM0 496l0 16 32 0 0-16 0-130.5L1.6 341.6c-.5-.4-1.1-.9-1.6-1.3L0 496zM16 144L0 144l0 16L0 278.9c0 16 8 31 21.4 39.9l100.2 66.8L146.9 512l32.6 0L151.7 372.9l-1.3-6.5-5.5-3.7L112 340.8l0-126.3 42.5 66.2 4.7 7.3 8.7 0 60.5 0L254 393.7c-18 11.3-30 31.4-30 54.3c0 35.3 28.7 64 64 64c33.8 0 61.5-26.2 63.8-59.5l148-37-7.8-31L346 421c-10.2-21.9-32.3-37-58-37c-1.1 0-2.3 0-3.4 .1L231.6 164.2l-3.8-15.6-31.1 7.5 3.8 15.6L220.8 256l-44 0L109.5 151.3l-4.7-7.3L96 144l-80 0zm64 32l0 143.4L39.1 292.2c-4.5-3-7.1-8-7.1-13.3L32 176l48 0zM256 448a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM480 345.6l-7.8-31L449.4 223l-7.8-31-31 7.8L319 222.6l-31 7.8 7.8 31L318.6 353l7.8 31 31-7.8L449 353.4l31-7.8zm-130.3-.4l-22.9-91.5 91.5-22.9 22.9 91.5-91.5 22.9z" />
    </Icon>
);

export default PersonDolly;