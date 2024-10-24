
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vacuum-robot` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum-robot?s=sharp-duotone-solid vacuum-robot}
 * @preview ![vacuum-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/vacuum-robot.svg)
 */
const VacuumRobot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M105.4 320c3.8 3.8 7.5 7.5 11.3 11.3c21.3 21.3 42.7 42.7 64 64c3.8 3.8 7.5 7.5 11.3 11.3c7.5-7.5 15.1-15.1 22.6-22.6l-11.3-11.3-64-64L128 297.4c-7.5 7.5-15.1 15.1-22.6 22.6zm16-80c3.8 3.8 7.5 7.5 11.3 11.3c42.7 42.7 85.3 85.3 128 128c3.8 3.8 7.5 7.5 11.3 11.3c7.5-7.5 15.1-15.1 22.6-22.6l-11.3-11.3-128-128L144 217.4c-7.5 7.5-15.1 15.1-22.6 22.6zm80-16c3.8 3.8 7.5 7.5 11.3 11.3c21.3 21.3 42.7 42.7 64 64c3.8 3.8 7.5 7.5 11.3 11.3c7.5-7.5 15.1-15.1 22.6-22.6l-11.3-11.3-64-64L224 201.4c-7.5 7.5-15.1 15.1-22.6 22.6z" />
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM155.3 155.3c55.6-55.6 145.8-55.6 201.4 0s55.6 145.8 0 201.4l22.6 22.6c68.1-68.1 68.1-178.5 0-246.6s-178.5-68.1-246.6 0l22.6 22.6zm80 57.4L224 201.4 201.4 224l11.3 11.3 64 64L288 310.6 310.6 288l-11.3-11.3-64-64zm-80 16L144 217.4 121.4 240l11.3 11.3 128 128L272 390.6 294.6 368l-11.3-11.3-128-128zm-16 80L128 297.4 105.4 320l11.3 11.3 64 64L192 406.6 214.6 384l-11.3-11.3-64-64z" />
    </Icon>
);

export default VacuumRobot;