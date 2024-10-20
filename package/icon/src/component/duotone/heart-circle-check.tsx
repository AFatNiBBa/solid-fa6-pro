
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-circle-check` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-check?s=duotone heart-circle-check}
 * @preview ![heart-circle-check](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/heart-circle-check.svg)
 */
const HeartCircleCheck: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6l0-5.8c0-69.9-50.5-129.5-119.4-141c-7.8-1.3-15.7-1.9-23.5-1.9C331.5 42.2 295 57 268 84L256 96 244 84c-27-27-63.5-41.9-101.1-41.9c-7.8 0-15.7 .6-23.5 1.9C50.5 55.6 0 115.2 0 185.1z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm67.3-164.7l-72 72c-6.2 6.2-16.4 6.2-22.6 0l-40-40c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L416 385.4l60.7-60.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z" />
    </Icon>
);

export default HeartCircleCheck;