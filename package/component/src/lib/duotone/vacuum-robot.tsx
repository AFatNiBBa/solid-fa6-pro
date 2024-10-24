
import { Icon, generic } from "../../index";

/**
 * A component that renders the `vacuum-robot` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/vacuum-robot?s=duotone vacuum-robot}
 * @preview ![vacuum-robot](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/vacuum-robot.svg)
 */
const VacuumRobot: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M112 320c0-4.1 1.6-8.2 4.7-11.3c6.2-6.2 16.4-6.2 22.6 0l64 64c6.2 6.2 6.2 16.4 0 22.6c-3.1 3.1-7.2 4.7-11.3 4.7s-8.2-1.6-11.3-4.7l-64-64c-3.1-3.1-4.7-7.2-4.7-11.3zm20.7-91.3c6.2-6.2 16.4-6.2 22.6 0l128 128c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-128-128c-6.2-6.2-6.2-16.4 0-22.6zm80-16c3.1-3.1 7.2-4.7 11.3-4.7s8.2 1.6 11.3 4.7l64 64c3.1 3.1 4.7 7.2 4.7 11.3s-1.6 8.2-4.7 11.3c-6.2 6.2-16.4 6.2-22.6 0l-64-64c-6.2-6.2-6.2-16.4 0-22.6z" />
        <path d="M0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM155.3 155.3c55.6-55.6 145.8-55.6 201.4 0s55.6 145.8 0 201.4c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0c68.1-68.1 68.1-178.5 0-246.6s-178.5-68.1-246.6 0c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zm80 57.4c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64zm-80 16c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l128 128c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-128-128zm-38.6 80c-6.2 6.2-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-64-64c-6.2-6.2-16.4-6.2-22.6 0z" />
    </Icon>
);

export default VacuumRobot;