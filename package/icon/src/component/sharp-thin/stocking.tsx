
import { Icon } from "../../index";

/**
 * A component that renders the `stocking` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stocking?s=sharp-thin stocking}
 * @preview ![stocking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/stocking.svg)
 */
const Stocking: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M80 16l0 80 288 0 0-80L80 16zM64 0L80 0 368 0l16 0 0 16 0 80 0 16-16 0L80 112l-16 0 0-16 0-80L64 0zm48 264.6l-7.1 4.8L64.6 296.2C34.2 316.4 16 350.5 16 386.9l0 2.2C16 448.2 63.8 496 122.8 496c21.1 0 41.7-6.2 59.3-17.9L336 375.4 336 144l16 0 0 240L190.9 491.4c-20.2 13.4-43.9 20.6-68.1 20.6C55 512 0 457 0 389.2l0-2.2c0-41.8 20.9-80.9 55.7-104.1L96 256l0-112 16 0 0 112 0 8.6z" />
    </Icon>
);

export default Stocking;