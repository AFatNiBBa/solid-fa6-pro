
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-snowboarding` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-snowboarding?s=sharp-duotone-solid person-snowboarding}
 * @preview ![person-snowboarding](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/person-snowboarding.svg)
 */
const PersonSnowboarding: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M-9.9 312L7 329l32 32 3.6 3.6 4.8 1.8 376 144 4.1 1.6 4.4 0 40 0 24 0 0-48-24 0-35.6 0c-27.7-10.6-55.4-21.2-83-31.8c-20.1-7.7-40.2-15.4-60.3-23.1c-51.4-19.7-102.7-39.3-154.1-59c-13.2-5.1-26.5-10.1-39.7-15.2c-10-3.8-19.9-7.6-29.9-11.4L41 295l-17-17L-9.9 312z" />
        <path d="M432 0a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM227.4 110.3l-40-80L244.6 1.7l33 66 64.7 12.9 7.4 1.5 6 4.6 144 112 25.3 19.6-39.3 50.5-25.3-19.6-72.1-56.1-71.5 31.8 55.8 46.5L387.6 284l-4.4 19.2-24 104-5.8 25-60.3-23.1 3.8-16.3L316.4 308 256 257.7l0 30.3 0 23.1-21.9 7.3L139 350.1 99.2 334.9 87.5 299.8l30.4-10.1L192 264.9l0-53.2c0-24.2 13.7-46.4 35.4-57.2l45.2-22.6-22.8-4.6-15.3-3.1-7-14z" />
    </Icon>
);

export default PersonSnowboarding;