
import { Icon } from "../../index";

/**
 * A component that renders the `poop` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/poop?s=sharp-solid poop}
 * @preview ![poop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/poop.svg)
 */
const Poop: typeof Icon = x => (
    <Icon {...x}>
        <path d="M176 128c44.2 0 80-35.8 80-80c0-17.5-5.6-33.7-15.1-46.8C245.8 .4 250.9 0 256 0c53 0 96 43 96 96c0 11.2-1.9 22-5.5 32l5.5 0c35.3 0 64 28.7 64 64c0 19.1-8.4 36.3-21.7 48l13.7 0c39.8 0 72 32.2 72 72c0 25.6-13.4 48.2-33.6 60.9C484.5 385.6 512 421.6 512 464l0 48L0 512l0-48c0-42.4 27.5-78.4 65.6-91.1C45.4 360.2 32 337.6 32 312c0-39.8 32.2-72 72-72l13.7 0C104.4 228.3 96 211.1 96 192c0-35.3 28.7-64 64-64l5.5 0 10.5 0z" />
    </Icon>
);

export default Poop;