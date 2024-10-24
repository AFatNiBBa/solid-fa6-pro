
import { Icon, generic } from "../../index";

/**
 * A component that renders the `conveyor-belt-boxes` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt-boxes?s=duotone conveyor-belt-boxes}
 * @preview ![conveyor-belt-boxes](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/conveyor-belt-boxes.svg)
 */
const ConveyorBeltBoxes: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 416c0 53 43 96 96 96l448 0c53 0 96-43 96-96s-43-96-96-96L96 320c-53 0-96 43-96 96zm160 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm192 0a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z" />
        <path d="M96 0C78.3 0 64 14.3 64 32l0 192c0 17.7 14.3 32 32 32l192 0c17.7 0 32-14.3 32-32l0-192c0-17.7-14.3-32-32-32L96 0zM416 64c-17.7 0-32 14.3-32 32l0 128c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L416 64z" />
    </Icon>
);

export default ConveyorBeltBoxes;