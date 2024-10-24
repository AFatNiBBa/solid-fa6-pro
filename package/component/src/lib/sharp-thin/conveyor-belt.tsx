
import { Icon } from "../../index";

/**
 * A component that renders the `conveyor-belt` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/conveyor-belt?s=sharp-thin conveyor-belt}
 * @preview ![conveyor-belt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/conveyor-belt.svg)
 */
const ConveyorBelt: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M496 16l0 256-352 0 0-256 112 0 0 108 0 20 16-12 48-36 48 36 16 12 0-20 0-108 112 0zM272 16l96 0 0 96L329.6 83.2 320 76l-9.6 7.2L272 112l0-96zM496 0L384 0 368 0 272 0 256 0 144 0 128 0l0 16 0 256 0 16 16 0 352 0 16 0 0-16 0-256 0-16L496 0zM624 416c0 44.2-35.8 80-80 80L96 496c-44.2 0-80-35.8-80-80s35.8-80 80-80l448 0c44.2 0 80 35.8 80 80zM96 320c-53 0-96 43-96 96s43 96 96 96l448 0c53 0 96-43 96-96s-43-96-96-96L96 320zm16 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm176-48a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm80 0a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm160-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm0 80a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
    </Icon>
);

export default ConveyorBelt;