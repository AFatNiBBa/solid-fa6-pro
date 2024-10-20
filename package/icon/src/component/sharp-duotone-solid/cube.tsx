
import { Icon, generic } from "../../index";

/**
 * A component that renders the `cube` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cube?s=sharp-duotone-solid cube}
 * @preview ![cube](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/cube.svg)
 */
const Cube: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M64 189.4c53.3 19 106.7 38.1 160 57.1l0 180c-53.3-19-106.7-38.1-160-57.1l0-180zm224 57.1c53.3-19 106.7-38.1 160-57.1l0 180L288 426.6l0-180z" />
        <path d="M256 6l10.8 3.8 224 80L512 97.4l0 22.6 0 272 0 22.6-21.2 7.6-224 80L256 506l-10.8-3.8-224-80L0 414.6 0 392 0 120 0 97.4l21.2-7.6 224-80L256 6zM64 369.4l160 57.1 0-180L64 189.4l0 180zm224 57.1l160-57.1 0-180L288 246.6l0 180zM256 74L93.5 132 256 190l162.5-58L256 74z" />
    </Icon>
);

export default Cube;