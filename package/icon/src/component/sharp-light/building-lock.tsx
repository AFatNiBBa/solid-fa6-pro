
import { Icon } from "../../index";

/**
 * A component that renders the `building-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/building-lock?s=sharp-light building-lock}
 * @preview ![building-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/building-lock.svg)
 */
const BuildingLock: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M32 32l320 0 0 240c0-30.5 12.2-58.2 32-78.4L384 32l0-32L352 0 32 0 0 0 0 32 0 480l0 32 32 0 96 0 32 0 64 0 32 0 64 0 0-32-64 0 0-80 0-32-32 0-64 0-32 0 0 32 0 80-96 0L32 32zM320 240l0-16-16 0-64 0-16 0 0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-16 0-48zM160 480l0-80 64 0 0 80-64 0zM64 96l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0L80 96 64 96zm32 32l32 0 0 32-32 0 0-32zM240 96l-16 0 0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0-64 0zm16 64l0-32 32 0 0 32-32 0zM64 224l0 16 0 64 0 16 16 0 64 0 16 0 0-16 0-64 0-16-16 0-64 0-16 0zm32 32l32 0 0 32-32 0 0-32zm160 32l0-32 32 0 0 32-32 0zm208-64c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default BuildingLock;