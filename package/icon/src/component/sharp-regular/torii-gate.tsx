
import { Icon } from "../../index";

/**
 * A component that renders the `torii-gate` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/torii-gate?s=sharp-regular torii-gate}
 * @preview ![torii-gate](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/torii-gate.svg)
 */
const ToriiGate: typeof Icon = x => (
    <Icon {...x}>
        <path d="M416 80l7.8 0 7.4-2.5L464 66.6l0 37.4-32 24-152 0-48 0L80 128 48 104l0-37.4L80.8 77.5 88.2 80 96 80l320 0zM232 176l0 64-120 0 0-64 120 0zM64 288l0 200 0 24 48 0 0-24 0-200 144 0 144 0 0 200 0 24 48 0 0-24 0-200 40 0 24 0 0-48-24 0-40 0 0-64 64-48 0-77.4L512 0 464 16 416 32 96 32 48 16 0 0 0 50.6 0 128l64 48 0 64-40 0L0 240l0 48 24 0 40 0zm336-48l-120 0 0-64 120 0 0 64z" />
    </Icon>
);

export default ToriiGate;