
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-carry-box` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-carry-box?s=duotone person-carry-box}
 * @preview ![person-carry-box](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-carry-box.svg)
 */
const PersonCarryBox: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M192 128l0 96 32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l128 0c17.7 0 32-14.3 32-32l0-128c0-17.7-14.3-32-32-32L224 96c-17.7 0-32 14.3-32 32z" />
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM96 241.7l0 65.1 51 51c7.1 7.1 11.8 16.2 13.4 26.1l15.2 90.9c2.9 17.4-8.9 33.9-26.3 36.8s-33.9-8.9-36.8-26.3L98.1 399.4 18.7 320C6.7 308 0 291.7 0 274.7l0-88.1C0 154.2 26.2 128 58.6 128c24.1 0 46.5 12 59.9 32l42.6 64 62.9 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-71.4 0c-16 0-31-8-39.9-21.4L96 241.7zM0 480L0 346.5l64 64L64 480s0 0 0 0c0 17.7-14.3 32-32 32s-32-14.3-32-32z" />
    </Icon>
);

export default PersonCarryBox;