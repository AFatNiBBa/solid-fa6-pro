
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-crack` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-crack?s=duotone heart-crack}
 * @preview ![heart-crack](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/heart-crack.svg)
 */
const HeartCrack: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5l0-5.8c0-69.9-50.5-129.5-119.4-141c-33.4-5.6-67.2 .9-95.7 17.6c7.6 21.2 15.1 42.4 22.7 63.6c1.1 3.2 .2 6.7-2.4 8.8c-30.2 25.2-60.4 50.4-90.7 75.6c20.1 32.7 40.2 65.4 60.4 98.1c2.1 3.4 1.4 7.8-1.7 10.4s-7.6 2.4-10.5-.3c-37.3-34.7-74.7-69.3-112-104c-1.6-1.5-2.5-3.5-2.6-5.7s.8-4.3 2.3-5.8c25.1-25.1 50.3-50.3 75.4-75.4c-16.6-25.8-33.2-51.6-49.8-77.5c-21.8-7.2-45.3-9.2-68.5-5.3C50.5 55.6 0 115.2 0 185.1z" />
        <path d="M296.8 61.7C286.4 67.8 276.7 75.3 268 84L256 96 244 84c-16-16-35.2-27.7-56-34.6l49.8 77.5-75.4 75.4c-1.5 1.5-2.4 3.6-2.3 5.8s1 4.2 2.6 5.7l112 104c2.9 2.7 7.4 2.9 10.5 .3s3.8-7 1.7-10.4l-60.4-98.1 90.7-75.6c2.6-2.1 3.5-5.7 2.4-8.8L296.8 61.7z" />
    </Icon>
);

export default HeartCrack;