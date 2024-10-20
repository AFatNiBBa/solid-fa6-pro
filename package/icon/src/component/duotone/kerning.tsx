
import { Icon, generic } from "../../index";

/**
 * A component that renders the `kerning` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/kerning?s=duotone kerning}
 * @preview ![kerning](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/kerning.svg)
 */
const Kerning: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 128c0 4.8 1.1 9.7 3.4 14.3l128 256c5.4 10.8 16.5 17.7 28.6 17.7s23.2-6.8 28.6-17.7l128-256c7.9-15.8 1.5-35-14.3-42.9c-4.6-2.3-9.5-3.4-14.3-3.4c-11.7 0-23 6.5-28.6 17.7L160 312.4 60.6 113.7C52.7 97.9 33.5 91.5 17.7 99.4C6.5 105 0 116.3 0 128zM323.4 369.7c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3L403.8 352l152.4 0 23.2 46.3c7.9 15.8 27.1 22.2 42.9 14.3C633.5 407 640 395.7 640 384c0-4.8-1.1-9.7-3.4-14.3l-128-256C503.2 102.8 492.1 96 480 96s-23.2 6.8-28.6 17.7l-128 256zM435.8 288L480 199.6 524.2 288l-88.4 0z" />
        <path d="M447.2 1.7c7.9 4 11.1 13.6 7.2 21.5l-240 480c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l240-480c4-7.9 13.6-11.1 21.5-7.2z" />
    </Icon>
);

export default Kerning;