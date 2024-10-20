
import { Icon } from "../../index";

/**
 * A component that renders the `meteor` icon from the `light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/meteor?s=light meteor}
 * @preview ![meteor](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/light/meteor.svg)
 */
const Meteor: typeof Icon = x => (
    <Icon {...x}>
        <path d="M320 32c0-26.4-30.1-41.4-51.2-25.6L81.1 147.2C30 185.5 0 246.1 0 309.8C0 420.9 90 512 201.3 512c64.6 0 125.3-31 163.2-83.4L498.6 242.7c15.3-21.2 .2-50.7-25.9-50.7l-26.1 0L509 50.3c2-4.5 3-9.5 3-14.4C512 16 496 0 476.2 0c-5 0-9.9 1-14.4 3L320 65.4 320 32zm154.6 .3c.5-.2 1-.3 1.5-.3c2.1 0 3.8 1.7 3.8 3.8c0 .5-.1 1.1-.3 1.5L407.4 201.6c-2.2 4.9-1.7 10.7 1.2 15.2s8 7.3 13.4 7.3l50.6 0L338.5 409.8C306.7 453.9 255.6 480 201.3 480C107.9 480 32 403.4 32 309.8c0-53.8 25.3-104.8 68.3-137L288 32l0 57.9c0 5.4 2.7 10.4 7.3 13.4s10.2 3.4 15.2 1.2L474.6 32.3zM296 312a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zM200 184a128 128 0 1 0 0 256 128 128 0 1 0 0-256zM184 304a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm56 48a16 16 0 1 0 -32 0 16 16 0 1 0 32 0z" />
    </Icon>
);

export default Meteor;