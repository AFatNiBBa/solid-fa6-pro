
import { Icon } from "../../index";

/**
 * A component that renders the `ban-parking` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ban-parking?s=sharp-light ban-parking}
 * @preview ![ban-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/ban-parking.svg)
 */
const BanParking: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 480C132.3 480 32 379.7 32 256c0-56.1 20.6-107.4 54.7-146.7l316 316C363.4 459.4 312.1 480 256 480zm76-170.6c30.9-16 52-48.2 52-85.4c0-53-43-96-96-96l-96 0-16 0 0 16 0 9.4L109.3 86.7C148.6 52.6 199.9 32 256 32c123.7 0 224 100.3 224 224c0 56.1-20.6 107.4-54.7 146.7L332 309.4zM307.6 285L208 185.4l0-25.4 80 0c35.3 0 64 28.7 64 64c0 28.5-18.7 52.7-44.4 61zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM176 257.9l0 46.1 0 64 0 16 32 0 0-16 0-48 30.1 0L176 257.9z" />
    </Icon>
);

export default BanParking;