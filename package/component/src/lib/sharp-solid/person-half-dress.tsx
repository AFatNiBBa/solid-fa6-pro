
import { Icon } from "../../index";

/**
 * A component that renders the `person-half-dress` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-half-dress?s=sharp-solid person-half-dress}
 * @preview ![person-half-dress](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-half-dress.svg)
 */
const PersonHalfDress: typeof Icon = x => (
    <Icon viewBox="0 0 320 512" {...x}>
        <path d="M160 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm72 416l0-32 0-227.8 33.8 53 53.9-34.4L238 142.8 228.6 128l-17.5 0L168 128l0 224 0 128 0 32 64 0zM152 384l0-256-43.1 0-17.5 0-9.4 14.8L.2 270.8l53.9 34.4 42-65.8L48 384l40 0 0 96 0 32 64 0 0-32 0-96s0 0 0 0z" />
    </Icon>
);

export default PersonHalfDress;