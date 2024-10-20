
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask-ventilator` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-ventilator?s=sharp-duotone-solid mask-ventilator}
 * @preview ![mask-ventilator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/mask-ventilator.svg)
 */
const MaskVentilator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128l0 24L0 344l0 18.7 18.2 4.5 144.1 36c-12.6-16.9-22.1-36-27.9-56.5L48 325.3 48 176l111.1 0c7.5-16.5 16.2-32.8 26-48L24 128 0 128zM288 288l0 224 64 0 0-224-64 0zM454.5 128c9.8 15.2 18.6 31.5 26.1 48L592 176l0 149.3-86.4 21.6c-5.8 20.6-15.5 39.6-28.2 56.5l144.4-36.1 18.2-4.5 0-18.7 0-192 0-24-24 0-161.5 0z" />
        <path d="M384 469.8l0-76.6c19.6-16.3 32-40.1 32-66.8c0-26.5-12.5-63.2-32.2-91.6L352 192l-32 0-32 0-32 42.8c-19.6 28.4-32 65.1-32 91.6c0 26.6 12.3 50.5 32 66.9l0 76.6c-75-24.5-128-91-128-169.1c0-53 24.7-126.5 64-183.2L256 32l128 0 63.6 85.6C487 174.3 512 247.8 512 300.8c0 78.6-53.9 144.5-128 169z" />
    </Icon>
);

export default MaskVentilator;