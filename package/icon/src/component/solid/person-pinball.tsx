
import { Icon } from "../../index";

/**
 * A component that renders the `person-pinball` icon from the `solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-pinball?s=solid person-pinball}
 * @preview ![person-pinball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/solid/person-pinball.svg)
 */
const PersonPinball: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM96 241.7l0 65.1 49.9 49.9c9 9 14.1 21.2 14.1 33.9l0 89.4c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-82.7L18.7 320C6.7 308 0 291.7 0 274.7l0-88.1C0 154.2 26.2 128 58.6 128c24.1 0 46.5 12 59.9 32l42.6 64 62.9 0c12.9 0 24.1 7.7 29.1 18.7l295-49.2L515.3 95c-2.2-6.5-3.3-13.4-3.3-20.2L512 32c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32l0 146.2 0 37.8 0 8 0 256c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-96-320 0 0 96c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-192-39.4 0c-16 0-31-8-39.9-21.4L96 241.7zM0 480L0 346.5l64 64L64 480s0 0 0 0c0 17.7-14.3 32-32 32s-32-14.3-32-32zM280 336a24 24 0 1 0 0-48 24 24 0 1 0 0 48z" />
    </Icon>
);

export default PersonPinball;