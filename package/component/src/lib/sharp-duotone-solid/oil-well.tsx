
import { Icon, generic } from "../../index";

/**
 * A component that renders the `oil-well` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-well?s=sharp-duotone-solid oil-well}
 * @preview ![oil-well](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/oil-well.svg)
 */
const OilWell: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M137.3 448l67.8 0 11.2-32 111.4 0 11.2 32 67.8 0L340 257.5l-62.2 16.1L305.3 352l-66.6 0L265 277l-74.6 19.3L137.3 448zm90.9-259.6c26.8-6.9 53.6-13.9 80.4-20.8l-6.3-18.1L294.7 128l-45.4 0-7.5 21.4-13.6 39zM272 63.1l-.3 .9 .6 0-.3-.9z" />
        <path d="M528.3 61.3c-11.4-42.7-55.3-68-98-56.6L384 17.1l32.8 122.4L96 222.6 96 184l0-24-48 0 0 24 0 264-16 0L0 448l0 64 32 0 512 0 32 0 0-64-32 0L96 448l0-159.2 337.4-87.5 33.5 124.9 46.4-12.4c42.7-11.4 68-55.3 56.6-98L528.3 61.3z" />
    </Icon>
);

export default OilWell;