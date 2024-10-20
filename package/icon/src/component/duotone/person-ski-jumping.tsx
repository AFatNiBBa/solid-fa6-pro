
import { Icon, generic } from "../../index";

/**
 * A component that renders the `person-ski-jumping` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/person-ski-jumping?s=duotone person-ski-jumping}
 * @preview ![person-ski-jumping](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/person-ski-jumping.svg)
 */
const PersonSkiJumping: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 488c0 3.7 .9 7.5 2.7 11c6.1 11.8 20.6 16.4 32.3 10.3L455.8 291.7c34.5-17.9 56.2-53.5 56.2-92.4l0-7.3c0-13.3-10.7-24-24-24s-24 10.7-24 24l0 7.3c0 20.9-11.7 40.1-30.3 49.7C349 292.9 264.2 336.7 179.5 380.6l-55.3 28.6C87.1 428.3 50.1 447.5 13 466.7C4.7 470.9 0 479.3 0 488z" />
        <path d="M352 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zM128 128c0-17.7 14.3-32 32-32l144.5 0c46 0 65.6 58.4 29 86.2L230.1 260.8l-6.4 7.5c-2.4 2.8-4.4 6.1-5.7 9.6L179.5 380.6l-55.3 28.6c-10.7-8.4-15.2-23-10.2-36.4l44-117.4c3.9-10.5 9.7-20.2 17-28.8L232.1 160 160 160c-17.7 0-32-14.3-32-32z" />
    </Icon>
);

export default PersonSkiJumping;