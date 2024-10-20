
import { Icon, generic } from "../../index";

/**
 * A component that renders the `prescription-bottle-pill` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/prescription-bottle-pill?s=duotone prescription-bottle-pill}
 * @preview ![prescription-bottle-pill](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/prescription-bottle-pill.svg)
 */
const PrescriptionBottlePill: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 32L0 64C0 81.7 14.3 96 32 96l320 0c17.7 0 32-14.3 32-32l0-32c0-17.7-14.3-32-32-32L32 0C14.3 0 0 14.3 0 32zm32 96l0 64 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L32 224l0 64 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L32 320l0 64 112 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L32 416l0 32c0 35.3 28.7 64 64 64l192 0c11.6 0 22.4-3.1 31.8-8.4c-39-32.3-63.8-81-63.8-135.6c0-68.4 39-127.7 96-156.8l0-83.2L32 128z" />
        <path d="M338.5 297.1c-10.1-10.1-27-9.2-33.7 3.4C294.1 320.6 288 343.6 288 368c0 79.5 64.5 144 144 144c24.4 0 47.4-6.1 67.5-16.8c12.6-6.7 13.5-23.6 3.4-33.7L338.5 297.1zM525.5 438.9c10.1 10.1 27 9.2 33.7-3.4C569.9 415.4 576 392.4 576 368c0-79.5-64.5-144-144-144c-24.4 0-47.4 6.1-67.5 16.8c-12.6 6.7-13.5 23.6-3.4 33.7L525.5 438.9z" />
    </Icon>
);

export default PrescriptionBottlePill;