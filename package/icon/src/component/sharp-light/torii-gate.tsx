
import { Icon } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=sharp-light torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 64l5.2 0 4.9-1.6 53.9-18 0 67.6-42.7 32L272 144l-32 0L74.7 144 32 112l0-67.6 53.9 18L90.8 64 96 64l320 0zM240 176l0 80L96 256l0-80 144 0zM64 288l0 208 0 16 32 0 0-16 0-208 160 0 160 0 0 208 0 16 32 0 0-16 0-208 48 0 16 0 0-32-16 0-48 0 0-80 64-48 0-94.3L512 0 480 10.7 416 32 96 32 32 10.7 0 0 0 33.7 0 128l64 48 0 80-48 0L0 256l0 32 16 0 48 0zm352-32l-144 0 0-80 144 0 0 80z" />
    </Icon>
);

export default ToriiGate;