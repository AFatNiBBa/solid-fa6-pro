
import { Icon } from "../../index";

/**
 * A component that renders the `skull-crossbones` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/skull-crossbones?s=sharp-light skull-crossbones}
 * @preview ![skull-crossbones](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/skull-crossbones.svg)
 */
const SkullCrossbones: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M300.1 198.4C322.9 180.2 336 155 336 128c0-49.6-46.5-96-112-96s-112 46.4-112 96c0 27 13.1 52.2 35.9 70.4L160 208l0 15.4 0 32.6 128 0 0-32.6 0-15.4 12.1-9.6zM368 128c0 37.9-18.5 72-48 95.4l0 32.6 0 32-32 0-128 0-32 0 0-32 0-32.6C98.5 200 80 165.9 80 128C80 57.3 144.5 0 224 0s144 57.3 144 128zm57.3 382.5L224 417.6 22.7 510.5 9.3 481.5 185.8 400 9.3 318.5l13.4-29.1L224 382.4l201.3-92.9 13.4 29.1L262.2 400l176.5 81.5-13.4 29.1zM160 136a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zm104-24a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default SkullCrossbones;