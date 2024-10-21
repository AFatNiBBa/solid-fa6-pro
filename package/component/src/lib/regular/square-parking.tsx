
import { Icon } from "../../index";

/**
 * A component that renders the `square-parking` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/square-parking?s=regular square-parking}
 * @preview ![square-parking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/square-parking.svg)
 */
const SquareParking: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M64 80c-8.8 0-16 7.2-16 16l0 320c0 8.8 7.2 16 16 16l320 0c8.8 0 16-7.2 16-16l0-320c0-8.8-7.2-16-16-16L64 80zM0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM184 272l64 0c26.5 0 48-21.5 48-48s-21.5-48-48-48l-64 0 0 96zm64 48l-64 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64 0-136c0-17.7 14.3-32 32-32l80 0c53 0 96 43 96 96s-43 96-96 96z" />
    </Icon>
);

export default SquareParking;