
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eclipse` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eclipse?s=sharp-duotone-solid eclipse}
 * @preview ![eclipse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/eclipse.svg)
 */
const Eclipse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 150L73.1 256 0 362l126.7 23.3L150 512l106-73.1L362 512l12.5-68.2c-31.6-15.1-58.8-37.9-79.2-66c-12.4 4-25.6 6.2-39.4 6.2c-70.7 0-128-57.3-128-128s57.3-128 128-128c13.7 0 27 2.2 39.4 6.2c20.3-28.1 47.6-50.9 79.2-66L362 0 256 73.1 150 0 126.7 126.7 0 150zM160 256c0 53 43 96 96 96c7.6 0 15-.9 22.1-2.6C264 321.3 256 289.6 256 256s8-65.4 22.1-93.4c-7.1-1.7-14.5-2.6-22.1-2.6c-53 0-96 43-96 96z" />
        <path d="M464 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352z" />
    </Icon>
);

export default Eclipse;