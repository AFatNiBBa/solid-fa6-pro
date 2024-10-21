
import { Icon } from "../../index";

/**
 * A component that renders the `dolly` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dolly?s=sharp-regular dolly}
 * @preview ![dolly](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dolly.svg)
 */
const Dolly: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path d="M24 0L0 0 0 48l24 0 86.6 0 93.7 287.1C177.7 352.1 160 382 160 416c0 53 43 96 96 96s96-43 96-96c0-2.8-.1-5.5-.3-8.2L560 334.6l22.6-8-15.9-45.3-22.6 8L335.8 362.5C318.5 336.9 289.2 320 256 320c-2 0-4 .1-6 .2L150.8 16.6C147.6 6.7 138.4 0 128 0L24 0zM256 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM446.5 87.7l-8.2-22.2L416 73.4 224.9 140.5l14.9 45.6 57.5-20.2 24.1 66.3 8.2 22.6 45.1-16.4-8.2-22.6L342.6 150l67-23.5 57.3 156 45.3-15.9L446.5 87.7z" />
    </Icon>
);

export default Dolly;