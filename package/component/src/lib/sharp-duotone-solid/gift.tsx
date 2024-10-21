
import { Icon, generic } from "../../index";

/**
 * A component that renders the `gift` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/gift?s=sharp-duotone-solid gift}
 * @preview ![gift](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/gift.svg)
 */
const Gift: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 128l73.6 0c7.3 14.2 18.3 26.2 31.8 34.7c6.8 4.2 14.1 7.5 21.9 9.8c3.9 1.1 7.9 2 12 2.6c2.1 .3 4.1 .5 6.2 .7c1 .1 2.1 .1 3.2 .2s2.1 .1 3.2 .1l64 0 8 0 0 80L0 256 0 128zM32 288l192 0 0 224L32 512l0-224zM288 176l72 0c34.2 0 63.8-19.5 78.4-48l73.6 0 0 128-224 0 0-80zm0 112l192 0 0 224-192 0 0-224z" />
        <path d="M190.5 68.8L225.3 128l-1.3 0-8 0-64 0c-22.1 0-40-17.9-40-40s17.9-40 40-40l2.2 0c14.9 0 28.8 7.9 36.3 20.8zM256 85.5l-24.1-41C215.7 16.9 186.1 0 154.2 0L152 0C103.4 0 64 39.4 64 88s39.4 88 88 88l64 0 8 0 0 80 64 0 0-80 72 0c48.6 0 88-39.4 88-88s-39.4-88-88-88l-2.2 0c-31.9 0-61.5 16.9-77.7 44.4L256 85.5zm65.5-16.7C329.1 55.9 342.9 48 357.8 48l2.2 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-73.3 0 34.8-59.2zM288 512l0-224-64 0 0 224 64 0z" />
    </Icon>
);

export default Gift;