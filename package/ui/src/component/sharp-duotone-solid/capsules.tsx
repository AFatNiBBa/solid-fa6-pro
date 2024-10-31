
import { Icon, generic } from "../../index";

/**
 * A component that renders the `capsules` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/capsules?s=sharp-duotone-solid capsules}
 * @preview ![capsules](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/capsules.svg)
 */
const Capsules: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 144l0 48 0 64c10.7 0 21.3 0 32 0s21.3 0 32 0c32 0 64 0 96 0c10.7 0 21.3 0 32 0s21.3 0 32 0l0-64 0-48c0-61.9-50.1-112-112-112S0 82.1 0 144zM256 98.3l0 163.9 53.1 77.5c17.5-12.2 35-24.5 52.4-36.7c26.6-18.6 53.3-37.3 79.9-55.9l52.4-36.7c-22.2-32.4-44.4-64.7-66.6-97.1C391.8 61.5 321.9 49 271.3 85.2c-5.6 4-10.7 8.4-15.3 13.1z" />
        <path d="M372.3 431.7l-63.1-92L361.6 303s0 0 0 0l79.9-55.9s0 0 0 0l52.4-36.7 61.9 90.2c35.5 51.7 23.2 123-27.5 159.2s-120.5 23.6-156-28.1zm116.4-22.4c.8-.5 1.6-1 2.4-1.6c.5-.4 1.1-.8 1.6-1.2l-4 2.8zM0 256l32 0 32 0 96 0 32 0 32 0 0 64 0 48c0 61.9-50.1 112-112 112S0 429.9 0 368l0-48 0-64z" />
    </Icon>
);

export default Capsules;