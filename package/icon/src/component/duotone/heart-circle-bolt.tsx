
import { Icon, generic } from "../../index";

/**
 * A component that renders the `heart-circle-bolt` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/heart-circle-bolt?s=duotone heart-circle-bolt}
 * @preview ![heart-circle-bolt](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/heart-circle-bolt.svg)
 */
const HeartCircleBolt: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 185.1l0 5.8c0 41.5 17.2 81.2 47.6 109.5L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9l2.6-2.4C267.2 438.6 256 404.6 256 368c0-97.2 78.8-176 176-176c28.3 0 55 6.7 78.7 18.5c.9-6.5 1.3-13 1.3-19.6l0-5.8c0-69.9-50.5-129.5-119.4-141c-7.8-1.3-15.7-1.9-23.5-1.9C331.5 42.2 295 57 268 84L256 96 244 84c-27-27-63.5-41.9-101.1-41.9c-7.8 0-15.7 .6-23.5 1.9C50.5 55.6 0 115.2 0 185.1z" />
        <path d="M288 368a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm194.5-66.2c2.8-5 1.7-11.1-2.6-14.9s-10.6-4-15.1-.6l-96 72c-4.1 3.1-5.8 8.5-4.2 13.4s6.2 8.2 11.4 8.2l35.6 0-30.1 54.2c-2.8 5-1.7 11.1 2.6 14.9s10.6 4 15.1 .6l96-72c4.1-3.1 5.8-8.5 4.2-13.4s-6.2-8.2-11.4-8.2l-35.6 0 30.1-54.2z" />
    </Icon>
);

export default HeartCircleBolt;