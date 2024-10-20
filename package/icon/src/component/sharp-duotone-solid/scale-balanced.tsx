
import { Icon, generic } from "../../index";

/**
 * A component that renders the `scale-balanced` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/scale-balanced?s=sharp-duotone-solid scale-balanced}
 * @preview ![scale-balanced](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/scale-balanced.svg)
 */
const ScaleBalanced: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M96 32l0 64 32 0 113.6 0c5.2 25.8 22.9 47.1 46.4 57.3L288 448l-160 0-32 0 0 64 32 0 192 0 192 0 32 0 0-64-32 0-160 0 0-294.7c23.5-10.3 41.2-31.6 46.4-57.3L512 96l32 0 0-64-32 0L384 32C369.4 12.6 346.2 0 320 0s-49.4 12.6-64 32L128 32 96 32z" />
        <path d="M97.5 128l14.5 0 32 0 14.5 0 6.7 12.9 88 168 2.7 5.2 0 5.9 0 32 0 9.9-7 7-40 40-7 7-9.9 0L64 416l-9.9 0-7-7L7 369l-7-7L0 352l0-32 0-5.9 2.7-5.2 88-168L97.5 128zm29 48L51.1 320l153.8 0L129.5 176l-3 0zm355-48l14.5 0 32 0 14.5 0 6.7 12.9 88 168 2.7 5.2 0 5.9 0 32 0 9.9-7 7-40 40-7 7-9.9 0-128 0-9.9 0-7-7-40-40-7-7 0-9.9 0-32 0-5.9 2.7-5.2 88-168 6.7-12.9zm29 48L435.1 320l153.8 0L513.5 176l-3 0z" />
    </Icon>
);

export default ScaleBalanced;