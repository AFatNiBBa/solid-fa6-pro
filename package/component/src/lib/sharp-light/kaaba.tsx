
import { Icon } from "../../index";

/**
 * A component that renders the `kaaba` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kaaba?s=sharp-light kaaba}
 * @preview ![kaaba](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/kaaba.svg)
 */
const Kaaba: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M544 193.8L288 279.1 32 193.8l0-39.1L288 240l256-85.3 0 39.1zm0 33.7l0 38.3-32 10.7 0 33.7 32-10.7 0 93.4L288 478.3 32 392.9l0-93.4 32 10.7 0-33.7L32 265.8l0-38.3 250.9 83.6 5.1 1.7 5.1-1.7L544 227.5zm0-108.5l0 1.9L288 206.3 32 120.9l0-1.9L288 33.7l256 85.3zM576 416l0-272 0-16 0-32L288 0 0 96l0 32 0 16L0 416l288 96 288-96zM96 287.1l0 33.7 96 32 0-33.7-96-32zm186.9 96l5.1 1.7 5.1-1.7L352 363.5l0-33.7-64 21.3-64-21.3 0 33.7 58.9 19.6zM384 352.9l96-32 0-33.7-96 32 0 33.7z" />
    </Icon>
);

export default Kaaba;