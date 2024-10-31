
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pen-swirl` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pen-swirl?s=sharp-duotone-solid pen-swirl}
 * @preview ![pen-swirl](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/pen-swirl.svg)
 */
const PenSwirl: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512l32 0 0-64-32 0C150 448 64 362 64 256S150 64 256 64c14.1 0 27.8 1.5 41 4.4L347.8 17C319.3 6 288.4 0 256 0C114.6 0 0 114.6 0 256zm320 96l0 64 32 0c88.4 0 160-71.6 160-160c0-32.2-5.9-63-16.8-91.3l-51.4 51.4c2.7 12.9 4.2 26.2 4.2 39.9c0 53-43 96-96 96l-32 0z" />
        <path d="M160 352l16-112L340.7 75.3l96 96L272 336 160 352zM459.3 148.7l-96-96L416 0l96 96-52.7 52.7z" />
    </Icon>
);

export default PenSwirl;