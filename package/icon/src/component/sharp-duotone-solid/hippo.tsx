
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hippo` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hippo?s=sharp-duotone-solid hippo}
 * @preview ![hippo](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/hippo.svg)
 */
const Hippo: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M2.1 350.3l43.9 19.5L64 329.1 64 480l128 0 0-108c19.8 7.7 41.4 12 64 12s44.2-4.3 64-12l0 108 128 0 0-96-64 0 0-42.8c-37.8-18-64-56.5-64-101.2l0-16 32 0 0 16c0 24.9 11.3 47.1 29.1 61.7c.9 .8 1.9 1.5 2.9 2.3c9.3 7 20.2 12 32 14.4c5.1 1 10.4 1.6 16 1.6c42.7 0 85.3 0 128 0c18 0 34.6-6 48-16c19.4-14.6 32-37.8 32-64c0-38.7-27.5-71-64-78.4l0-17.6c0-15.4-4.4-29.9-12-42.1L577 89l17-17L560 38.1 543 55 527.6 70.5C517.9 66.3 507.2 64 496 64l-32 0c-2 0-3.9 .1-5.8 .2L441 47l-17-17L390.1 64l17 17 3.5 3.5c-5.2 4.7-9.8 10-13.6 15.8L288 64l-32 0-24 0-8 0C117.1 68.5 32 156.3 32 264l0 18.9L2.1 350.3zM480 232a24 24 0 1 1 -48 0 24 24 0 1 1 48 0zm0-88a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm64 0a16 16 0 1 1 -32 0 16 16 0 1 1 32 0zm48 88a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M448 144a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm64 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zM416 352l0-33.6c5.2 1 10.5 1.6 16 1.6l48 0 0 32-64 0zm128 0l0-32 16 0c18 0 34.6-6 48-16l0 48-64 0z" />
    </Icon>
);

export default Hippo;