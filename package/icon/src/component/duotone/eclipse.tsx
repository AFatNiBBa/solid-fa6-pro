
import { Icon, generic } from "../../index";

/**
 * A component that renders the `eclipse` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/eclipse?s=duotone eclipse}
 * @preview ![eclipse](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/eclipse.svg)
 */
const Eclipse: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 355.4c0 2.1 .4 4.2 1.2 6.1c2.1 5 6.6 8.6 11.9 9.6L121 391l19.8 107.9c1 5.3 4.6 9.8 9.6 11.9s10.7 1.5 15.2-1.6L256 446.9l90.3 62.3c4.5 3.1 10.2 3.7 15.2 1.6s8.6-6.6 9.6-11.9l9.6-52.2c-34.2-15-63.7-38.9-85.4-68.8c-12.4 4-25.6 6.2-39.4 6.2c-70.7 0-128-57.3-128-128s57.3-128 128-128c13.7 0 27 2.2 39.4 6.2c21.7-29.9 51.1-53.9 85.4-68.8l-9.6-52.2c-1-5.3-4.6-9.8-9.6-11.9s-10.7-1.5-15.2 1.6L256 65.1 165.7 2.8c-4.5-3.1-10.2-3.7-15.2-1.6s-8.6 6.6-9.6 11.9L121 121 13.1 140.9c-5.3 1-9.8 4.6-11.9 9.6s-1.5 10.7 1.6 15.2L65.1 256 2.8 346.3C1 349 0 352.2 0 355.4zM160 256c0 53 43 96 96 96c7.6 0 15-.9 22.1-2.6C264 321.3 256 289.6 256 256s8-65.3 22.1-93.4c-7.1-1.7-14.5-2.6-22.1-2.6c-53 0-96 43-96 96z" />
        <path d="M464 80a176 176 0 1 0 0 352 176 176 0 1 0 0-352z" />
    </Icon>
);

export default Eclipse;