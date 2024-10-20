
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pencil-mechanical` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pencil-mechanical?s=duotone pencil-mechanical}
 * @preview ![pencil-mechanical](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pencil-mechanical.svg)
 */
const PencilMechanical: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M365.5 66.5c5.1 1.9 9.8 4.9 13.8 8.9c19.1 19.1 38.2 38.3 57.4 57.4c.5 .5 1 1 1.4 1.5c.5 .5 .9 1.1 1.4 1.6c.9 1.1 1.7 2.2 2.4 3.3c1.5 2.3 2.7 4.8 3.7 7.3l55.1-55.1C507.9 84.1 512 74.2 512 64s-4.1-20.1-11.3-27.3L475.3 11.3C468.1 4.1 458.2 0 448 0s-20.1 4.1-27.3 11.3L365.5 66.5z" />
        <path d="M253.7 87.6c-3.1-3.1-8.2-3.1-11.3 0L137 193c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9L208.4 53.7c21.9-21.9 57.3-21.9 79.2 0L317 83l7.7-7.7C331.9 68.1 341.8 64 352 64s20.1 4.1 27.3 11.3l57.4 57.4c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L184.8 439.2c-5.8 5.8-12.9 10-20.8 12.2L66.7 479.2 41 505c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l25.7-25.7L60.6 348c2.2-7.8 6.4-15 12.2-20.8L283 117 253.7 87.6zM106.4 362.4L89.1 422.9l60.5-17.3-43.2-43.2z" />
    </Icon>
);

export default PencilMechanical;