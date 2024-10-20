
import { Icon, generic } from "../../index";

/**
 * A component that renders the `oil-well` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/oil-well?s=duotone oil-well}
 * @preview ![oil-well](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/oil-well.svg)
 */
const OilWell: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M137.3 448l53.1-151.7L265 277l-26.3 75 66.6 0-27.4-78.4L340 257.5 406.7 448l-67.8 0-11.2-32-111.4 0-11.2 32-67.8 0zm90.9-259.6l13.6-39c4.5-12.8 16.6-21.4 30.2-21.4s25.7 8.6 30.2 21.4l6.3 18.1c-26.8 6.9-53.6 13.9-80.4 20.8z" />
        <path d="M528.3 61.3c-11.4-42.7-55.3-68-98-56.6L414.9 8.8C397.8 13.4 387.7 31 392.3 48l24.5 91.4L96 222.6 96 184c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 264-16 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l512 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 448l0-159.2 337.4-87.5 25.2 94c4.6 17.1 22.1 27.2 39.2 22.6l15.5-4.1c42.7-11.4 68-55.3 56.6-98L528.3 61.3z" />
    </Icon>
);

export default OilWell;