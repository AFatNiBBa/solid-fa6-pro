
import { Icon } from "../../index";

/**
 * A component that renders the `forklift` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/forklift?s=sharp-regular forklift}
 * @preview ![forklift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/forklift.svg)
 */
const Forklift: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M120 0L96 0l0 24 0 136-48 0L0 160l0 48L0 368l0 48c0 53 43 96 96 96s96-43 96-96l64 0c0 53 43 96 96 96s96-43 96-96c0-28.4-12.4-54-32-71.6l0-56.4 0-48 0-4.7-1.8-4.4-88-216L320.1 0 304 0 120 0zM240 240l-96-68.6L144 48l143.9 0 78.2 192L240 240zm-15.4 48l15.4 0 128 0 0 33.3c-5.2-.9-10.5-1.3-16-1.3c-35.5 0-66.6 19.3-83.2 48l-89.7 0c-16.6-28.7-47.6-48-83.2-48c-17.5 0-33.9 4.7-48 12.8L48 208l64.6 0 99.5 71.1 12.5 8.9zM96 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm256 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM528 24l0-24L480 0l0 24 0 400 0 24 24 0 112 0 24 0 0-48-24 0-88 0 0-376z" />
    </Icon>
);

export default Forklift;