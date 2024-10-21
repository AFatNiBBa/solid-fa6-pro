
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-shelter` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-shelter?s=sharp-duotone-solid person-shelter}
 * @preview ![person-shelter](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-shelter.svg)
 */
const PersonShelter: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M119.5 361.8l42.3 22.8 11.4-21.1L200 313.5 200 488l0 24 48 0 0-24 0-88 16 0 0 88 0 24 48 0 0-24 0-174.5 26.9 49.9 11.4 21.1 42.3-22.8-11.4-21.1-56-104L318.3 224 304 224l-96 0-14.3 0-6.8 12.6-56 104-11.4 21.1zM216 168a40 40 0 1 0 80 0 40 40 0 1 0 -80 0z" />
        <path d="M64 512l0-330.6 192-108 192 108L448 512l64 0 0-368L256 0 0 144 0 512l64 0z" />
    </Icon>
);

export default PersonShelter;