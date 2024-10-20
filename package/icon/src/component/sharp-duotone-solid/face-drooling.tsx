
import { Icon, generic } from "../../index";

/**
 * A component that renders the `face-drooling` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-drooling?s=sharp-duotone-solid face-drooling}
 * @preview ![face-drooling](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/face-drooling.svg)
 */
const FaceDrooling: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256C0 397.4 114.6 512 256 512c33.9 0 66.4-6.6 96-18.6l0-122.4c-9.7 6.4-20.3 12.2-32 16.9c0 20.1 0 40.1 0 60.2c0 5.3 0 10.7 0 16l-32 0c0-5.3 0-10.7 0-16c0-17 0-33.9 0-50.9c-10.1 1.9-20.8 2.9-32 2.9c-67 0-113.8-36.7-140.5-70l-10-12.5 25-20 10 12.5c22.8 28.5 61.3 58 115.5 58s92.7-29.5 115.5-58l10-12.5 25 20-10 12.5c-3.8 4.7-7.9 9.5-12.5 14.2l0 133.6c76.5-44.3 128-127 128-221.8C512 114.6 397.4 0 256 0S0 114.6 0 256zm104.8-45.1c9.5-28.5 38.4-66.9 95.2-66.9c0 10.7 0 21.3 0 32c-39.2 0-58.3 25.6-64.8 45.1c-10.1-3.4-20.2-6.7-30.4-10.1zM312 144c56.8 0 85.7 38.4 95.2 66.9l-30.4 10.1C370.3 201.6 351.2 176 312 176c0-10.7 0-21.3 0-32z" />
        <path d="M200 176c-39.2 0-58.3 25.6-64.8 45.1l-30.4-10.1c9.5-28.5 38.4-66.9 95.2-66.9l0 32zm112 0l0-32c56.8 0 85.7 38.4 95.2 66.9l-30.4 10.1C370.3 201.6 351.2 176 312 176zM288 448l0-50.9c11.4-2.1 22.1-5.3 32-9.3l0 60.2 0 16-32 0 0-16zm64 48l0-125.1c12.3-8.1 22.9-17.4 32-26.8L384 496l0 16-32 0 0-16z" />
    </Icon>
);

export default FaceDrooling;