
import { Icon, generic } from "../../index";

/**
 * A component that renders the `robot-astromech` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/robot-astromech?s=duotone robot-astromech}
 * @preview ![robot-astromech](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/robot-astromech.svg)
 */
const RobotAstromech: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M2.3 487.8c-3 4.9-3 11.1-.2 16.1s8.2 8.1 13.9 8.1l96 0c8.8 0 16-7.2 16-16l0-112 45.3 45.3c12 12 28.3 18.7 45.3 18.7l75 0c17 0 33.3-6.7 45.3-18.7L384 384l0 112c0 8.8 7.2 16 16 16l96 0c5.8 0 11.1-3.1 13.9-8.1c1.4-2.4 2.1-5.2 2.1-7.9c0-2.9-.8-5.7-2.3-8.2L470.8 423c-4.5-7.5-6.8-16-6.8-24.7L464 240c0-26.5-21.5-48-48-48l-32 0-256 0-32 0c-26.5 0-48 21.5-48 48l0 158.3c0 8.7-2.4 17.2-6.8 24.7L2.3 487.8zM192 272c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16zm0 64c0-8.8 7.2-16 16-16l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16z" />
        <path d="M128 128C128 57.3 185.3 0 256 0s128 57.3 128 128l0 64-256 0 0-64zm96 0a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm96-16a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM208 256l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
    </Icon>
);

export default RobotAstromech;