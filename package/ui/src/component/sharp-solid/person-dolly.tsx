
import { Icon } from "../../index";

/**
 * A component that renders the `person-dolly` icon from the `sharp-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dolly?s=sharp-solid person-dolly}
 * @preview ![person-dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-solid/person-dolly.svg)
 */
const PersonDolly: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM0 346.5l64 64L64 480s0 0 0 0l0 32L0 512l0-32L0 346.5zM0 128l32 0 48 0 17.1 0 9.5 14.3L161.1 224l46.1 0-6.5-26.2-5.8-23.3 46.6-11.6 5.8 23.3 49.6 198.4c17.6 2.4 32.9 12 42.8 25.7l134.4-33.6 23.3-5.8 11.6 46.6-23.3 5.8L351.4 456.9C347.1 488 320.3 512 288 512c-35.3 0-64-28.7-64-64c0-21.3 10.4-40.1 26.3-51.7L223.3 288 144 288l-17.1 0-9.5-14.3L96 241.7l0 65.1 54.6 54.6 7.3 7.3 1.7 10.1 8 48 4 24 4 24s0 0 0 0l4 24 2.2 13.3-64.9 0-.5-2.7-4-24s0 0 0 0l-4-24-4-24-6.3-37.9L41.4 342.6 18.7 320C6.7 308 0 291.7 0 274.7L0 160l0-32zM288 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm38.4-80L288 230.4 441.6 192 480 345.6 326.4 384z" />
    </Icon>
);

export default PersonDolly;