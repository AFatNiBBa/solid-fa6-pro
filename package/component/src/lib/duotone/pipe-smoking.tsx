
import { Icon, generic } from "../../index";

/**
 * A component that renders the `pipe-smoking` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pipe-smoking?s=duotone pipe-smoking}
 * @preview ![pipe-smoking](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/pipe-smoking.svg)
 */
const PipeSmoking: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M361.5 192c5.6 .3 11.2 2 16.2 5.3l24 16c.7 .5 1.4 1 2.1 1.5s1.3 1.1 1.9 1.7c1.2 1.1 2.4 2.4 3.4 3.7c2 2.6 3.6 5.5 4.8 8.5l81.3-122C513.1 80 543.1 64 575.2 64L608 64c17.7 0 32-14.3 32-32s-14.3-32-32-32L575.2 0C521.7 0 471.7 26.7 442 71.2L361.5 192z" />
        <path d="M377.8 197.4c-14.7-9.8-34.6-5.8-44.4 8.9L256 322.3l0-50.3c0-26.5-21.5-48-48-48L48 224c-26.5 0-48 21.5-48 48l0 82.9C0 441.7 70.3 512 157.1 512c52.5 0 101.6-26.2 130.7-69.9L410.6 257.8c9.8-14.7 5.8-34.6-8.9-44.4l-24-16z" />
    </Icon>
);

export default PipeSmoking;