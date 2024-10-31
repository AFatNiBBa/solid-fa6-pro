
import { Icon } from "../../index";

/**
 * A component that renders the `kaaba` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kaaba?s=sharp-regular kaaba}
 * @preview ![kaaba](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/kaaba.svg)
 */
const Kaaba: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M288 224l240-80 0 47.1-240 80-240-80L48 144l240 80zm-240 .9l234.9 78.3 5.1 1.7 5.1-1.7L528 224.9l0 38.3-16 5.3 0 33.7 16-5.3 0 84.5-240 80-240-80 0-84.5 16 5.3 0-33.7-16-5.3 0-38.3zm240-51.5L103.8 112 288 50.6 472.2 112 288 173.4zM576 416l0-288 0-32-12-4-15.9-5.3L288 0 27.9 86.7 12 92 0 96l0 32L0 416l288 96 288-96zM96 279.1l0 33.7 96 32 0-33.7-96-32zm186.9 96l5.1 1.7 5.1-1.7L352 355.5l0-33.7-64 21.3-64-21.3 0 33.7 58.9 19.6zM384 344.9l96-32 0-33.7-96 32 0 33.7z" />
    </Icon>
);

export default Kaaba;