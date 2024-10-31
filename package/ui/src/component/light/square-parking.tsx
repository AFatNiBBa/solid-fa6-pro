
import { Icon } from "../../index";

/**
 * A component that renders the `square-parking` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=light square-parking}
 * @preview ![square-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/square-parking.svg)
 */
const SquareParking: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 64C46.3 64 32 78.3 32 96l0 320c0 17.7 14.3 32 32 32l320 0c17.7 0 32-14.3 32-32l0-320c0-17.7-14.3-32-32-32L64 64zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM176 288l80 0c35.3 0 64-28.7 64-64s-28.7-64-64-64l-80 0 0 128zm80 32l-80 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-152c0-13.3 10.7-24 24-24l88 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default SquareParking;