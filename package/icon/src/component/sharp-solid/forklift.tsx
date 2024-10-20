
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=sharp-solid forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M128 0L96 0l0 32 0 128L0 160 0 416c0 53 43 96 96 96s96-43 96-96l64 0c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6l0-88.4 0-5.5-1.9-5.2-80-224L326.6 0 304 0 128 0zM256 256l-96-96 0-96 121.4 0L350 256l-94 0zM96 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm256 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM544 32l0-32L480 0l0 32 0 384 0 32 32 0 96 0 32 0 0-64-32 0-64 0 0-352z" />
    </Icon>
);

export default Forklift;