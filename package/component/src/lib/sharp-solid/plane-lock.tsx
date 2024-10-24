
import { Icon } from "../../index";

/**
 * A component that renders the `plane-lock` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-lock?s=sharp-solid plane-lock}
 * @preview ![plane-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/plane-lock.svg)
 */
const PlaneLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M192 93.7C192 59.5 221 0 256 0c36 0 64 59.5 64 93.7l0 66.3 104.3 69.5C419 242.6 416 257 416 272l0 16-32 0 0 53.3L320 320l0 80 64 48 0 64L256 480 128 512l0-64 64-48 0-80L0 384l0-96L192 160l0-66.3zM528 240c-17.7 0-32 14.3-32 32l0 48 64 0 0-48c0-17.7-14.3-32-32-32zm-80 32c0-44.2 35.8-80 80-80s80 35.8 80 80l0 48 32 0 0 192-224 0 0-192 32 0 0-48z" />
    </Icon>
);

export default PlaneLock;