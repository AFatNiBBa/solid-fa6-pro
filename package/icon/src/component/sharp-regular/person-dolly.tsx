
import { Icon } from "../../index";

/**
 * A component that renders the `person-dolly` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-dolly?s=sharp-regular person-dolly}
 * @preview ![person-dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/person-dolly.svg)
 */
const PersonDolly: typeof Icon = x => (
    <Icon {...x}>
        <path d="M32 48a48 48 0 1 1 96 0A48 48 0 1 1 32 48zM0 340.3c.5 .4 1.1 .9 1.6 1.3L48 378.1 48 488l0 24L0 512l0-24L0 340.3zM0 128l24 0 64 0 13.1 0 7.1 11 64.9 101 38.2 0-10.5-42.2-5.8-23.3 46.6-11.6 5.8 23.3 49.6 198.4c17.6 2.4 32.9 12 42.9 25.7l134.4-33.6 23.3-5.8 11.6 46.6-23.3 5.8L351.4 456.9C347.1 488 320.3 512 288 512c-35.3 0-64-28.7-64-64c0-21.3 10.4-40.1 26.3-51.7L223.3 288 160 288l-13.1 0-7.1-11L120 246.2l0 81.8 0 4.9 30.8 24.2 7.6 5.9 1.4 9.5L179.7 512l-48.5 0L113.6 388.9 21.4 316.5C7.9 305.9 0 289.6 0 272.4L0 152l0-24zM72 295.2L72 184l0-8-24 0 0 96.4c0 2.5 1.1 4.8 3.1 6.3L72 295.2zM288 464a16 16 0 1 0 0-32 16 16 0 1 0 0 32zm38.4-80L288 230.4 441.6 192 480 345.6 326.4 384z" />
    </Icon>
);

export default PersonDolly;