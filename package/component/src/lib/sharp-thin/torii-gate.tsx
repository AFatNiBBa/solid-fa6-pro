
import { Icon } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=sharp-thin torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 48l2.6 0 2.5-.8 74.9-25 0 95L428.9 144 416 144l-152 0-16 0L96 144l-12.9 0L16 117.2l0-95 74.9 25 2.5 .8L96 48l320 0zM248 160l0 80L96 240l0-80 152 0zM80 256l0 248 0 8 16 0 0-8 0-248 160 0 160 0 0 248 0 8 16 0 0-8 0-248 72 0 8 0 0-16-8 0-72 0 0-80 80-32 0-111.1L512 0 496 5.3 416 32 96 32 16 5.3 0 0 0 16.9 0 128l80 32 0 80L8 240l-8 0 0 16 8 0 72 0zm336-16l-152 0 0-80 152 0 0 80z" />
    </Icon>
);

export default ToriiGate;