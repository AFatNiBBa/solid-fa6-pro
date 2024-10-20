
import { Icon } from "../../index";

/**
 * A component that renders the `cable-car` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/cable-car?s=sharp-thin cable-car}
 * @preview ![cable-car](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/cable-car.svg)
 */
const CableCar: typeof Icon = x => (
    <Icon {...x}>
        <path d="M272 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm48 0a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM192 48a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm0 48a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM464 240l0 256L48 496l0-256 200 0 16 0 200 0zm0-16l-200 0 0-97.7L497.8 71.8l7.8-1.8L502 54.4l-7.8 1.8-240 56-240 56L6.4 170 10 185.6l7.8-1.8L248 130.1l0 93.9L48 224l-16 0 0 16 0 256 0 16 16 0 416 0 16 0 0-16 0-256 0-16-16 0zM96 384l0-96 96 0 0 96-96 0zm112 0l0-96 96 0 0 96-96 0zm112 0l0-96 96 0 0 96-96 0zM80 272l0 16 0 96 0 16 16 0 320 0 16 0 0-16 0-96 0-16-16 0L96 272l-16 0z" />
    </Icon>
);

export default CableCar;