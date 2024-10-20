
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt-arm` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-arm?s=duotone conveyor-belt-arm}
 * @preview ![conveyor-belt-arm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/conveyor-belt-arm.svg)
 */
const ConveyorBeltArm: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96l448 0c53 0 96-43 96-96s-43-96-96-96l-32 0-96 0-64 0-96 0-64 0-96 0c-53 0-96 43-96 96zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M240.9 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-52.9 0-5.7 34c.8 1 1.5 2 2.3 3l204.5 27.3c17.5 2.3 29.8 18.4 27.5 35.9c-1.4 10.2-7.4 18.7-15.7 23.5l0 20.3c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-17.9L255.2 164.4c-8.4 7.2-19.3 11.6-31.2 11.6c-26.5 0-48-21.5-48-48c0-17.1 8.9-32 22.3-40.6L202.2 64 160 64c-17.7 0-32-14.3-32-32s14.3-32 32-32l79 0c.6 0 1.2 0 1.9 0zM240 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM96 280c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24l0 40-96 0 0-40zm184-24l48 0c13.3 0 24 10.7 24 24l0 40-96 0 0-40c0-13.3 10.7-24 24-24zm160 0l48 0c13.3 0 24 10.7 24 24l0 40-96 0 0-40c0-13.3 10.7-24 24-24z" />
    </Icon>
);

export default ConveyorBeltArm;