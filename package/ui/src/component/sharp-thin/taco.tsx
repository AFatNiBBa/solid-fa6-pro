
import { Icon } from "../../index";

/**
 * A component that renders the `taco` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/taco?s=sharp-thin taco}
 * @preview ![taco](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/taco.svg)
 */
const Taco: typeof Icon = x => (
    <Icon {...x}>
        <path d="M325.9 86.1l88.3-2.7 24.7 84.9L512 218l-22.2 61.8c-3.7-5.1-7.6-10.2-11.6-15l14.6-40.5-62.8-42.7-4.8-3.2-1.6-5.5-21.2-73-76 2.3-5.7 .2-4.5-3.5L256 52.2 195.9 98.8l-4.5 3.5-5.7-.2-76-2.3-21.2 73-1.6 5.5-4.8 3.2L19.2 224.2l14.6 40.5c-4 4.9-7.9 9.9-11.6 15L0 218l73.1-49.7L97.8 83.4l88.3 2.7L256 32l69.9 54.1zM16 448l0 16 480 0 0-16c0-132.5-107.5-240-240-240S16 315.5 16 448zM0 464l0-16C0 306.6 114.6 192 256 192s256 114.6 256 256l0 16 0 16-16 0L16 480 0 480l0-16zM176 288a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm-64 64a16 16 0 1 1 0 32 16 16 0 1 1 0-32z" />
    </Icon>
);

export default Taco;