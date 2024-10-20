
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=thin conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M464 16c17.7 0 32 14.3 32 32l0 192c0 17.7-14.3 32-32 32l-288 0c-17.7 0-32-14.3-32-32l0-192c0-17.7 14.3-32 32-32l80 0 0 120c0 3.1 1.8 6 4.7 7.3s6.2 .8 8.5-1.2L320 98.5l50.8 43.5c2.4 2 5.7 2.5 8.6 1.2s4.7-4.1 4.7-7.3l0-120 80 0zM272 16l96 0 0 102.6L325.2 81.9c-3-2.6-7.4-2.6-10.4 0L272 118.6 272 16zM176 0c-26.5 0-48 21.5-48 48l0 192c0 26.5 21.5 48 48 48l288 0c26.5 0 48-21.5 48-48l0-192c0-26.5-21.5-48-48-48L176 0zM624 416c0 44.2-35.8 80-80 80L96 496c-44.2 0-80-35.8-80-80s35.8-80 80-80l448 0c44.2 0 80 35.8 80 80zM96 320c-53 0-96 43-96 96s43 96 96 96l448 0c53 0 96-43 96-96s-43-96-96-96L96 320zm16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm176-48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ConveyorBelt;