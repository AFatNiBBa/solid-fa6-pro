
import { Icon, generic } from "../../index";

/**
 * A component that renders the `mask-ventilator` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mask-ventilator?s=duotone mask-ventilator}
 * @preview ![mask-ventilator](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/mask-ventilator.svg)
 */
const MaskVentilator: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 184c0-30.9 25.1-56 56-56l129.1 0c-9.7 15.2-18.5 31.5-26 48L56 176c-4.4 0-8 3.6-8 8l0 85c0 33 22.5 61.8 54.5 69.9l31.8 7.9c5.8 20.5 15.3 39.5 27.9 56.5L90.9 385.5C37.5 372.1 0 324.1 0 269l0-85zM288 320c0-17.7 14.3-32 32-32s32 14.3 32 32l0 192-64 0 0-192zM454.5 128L584 128c30.9 0 56 25.1 56 56l0 85c0 55.1-37.5 103.1-90.9 116.4l-71.6 17.9c12.7-16.9 22.3-36 28.2-56.5l31.8-8c32.1-8 54.5-36.8 54.5-69.9l0-85c0-4.4-3.6-8-8-8l-103.3 0c-7.6-16.5-16.3-32.8-26.1-48z" />
        <path d="M128 300.8C128 201.9 214 32 320 32c105 0 192 169.9 192 268.8c0 78.6-53.9 144.5-128 169l0-76.6c19.6-16.3 32-40.1 32-66.8c0-49.5-43.5-134.4-96-134.4c-53 0-96 84.9-96 134.4c0 26.6 12.3 50.5 32 66.9l0 76.6c-75-24.5-128-91-128-169.1z" />
    </Icon>
);

export default MaskVentilator;