
import { Icon } from "../../index";

/**
 * A component that renders the `kaaba` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kaaba?s=sharp-thin kaaba}
 * @preview ![kaaba](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/kaaba.svg)
 */
const Kaaba: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M560 196.9L288 287.6 16 196.9 16 128l0-2.7L288 216l272-90.7 0 2.7 0 68.9zm0 16.9l0 39.1-48 16 0 16.9 48-16 0 134.7L288 495.1 16 404.5l0-134.7 48 16 0-16.9-48-16 0-39.1 269.5 89.8 2.5 .8 2.5-.8L560 213.8zm0-106.2l0 .9L288 199.1 16 108.5l0-.9L288 16.9l272 90.7zM576 128l0-8 0-24L288 0 0 96l0 24 0 8L0 416l288 96 288-96 0-288zM96 279.6l0 16.9 96 32 0-16.9-96-32zm189.5 80l2.5 .8 2.5-.8L352 339.1l0-16.9-64 21.3-64-21.3 0 16.9 61.5 20.5zM384 328.4l96-32 0-16.9-96 32 0 16.9z" />
    </Icon>
);

export default Kaaba;