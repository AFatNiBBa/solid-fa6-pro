
import { Icon, generic } from "../../index";

/**
 * A component that renders the `hat-witch` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/hat-witch?s=duotone hat-witch}
 * @preview ![hat-witch](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/hat-witch.svg)
 */
const HatWitch: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 438.6c0 6 2.4 11.7 6.9 15.6C25.9 470.3 82.6 512 160 512l256 0c77.4 0 134.1-41.7 153.1-57.8c4.6-3.9 6.9-9.6 6.9-15.6c0-12.5-10.1-22.6-22.6-22.6L480 416l-128 0-32 0-64 0-32 0L96 416l-73.4 0C10.1 416 0 426.1 0 438.6z" />
        <path d="M96 416L200.6 180.7c15.3-34.4 40.3-63.5 72-83.7L416.1 5c5.2-3.3 11.1-5 17.3-5l2.2 0c8 0 15.7 3 21.6 8.4l76.4 70.1c6.6 6.1 10.4 14.6 10.4 23.6l0 6.8c0 2.1-.2 4.2-.6 6.3l-12.2 60.8c-1.9 9.3-10.1 16.1-19.6 16.1c-9.2 0-17.2-6.2-19.4-15.1l-6.2-24.6C482.5 138 469.7 128 455 128l-20.4 0c-11.5 0-22.1 6.2-27.8 16.1l-18.6 32.5c-2.8 4.8-4.2 10.3-4.2 15.9l0 .7c0 4.5 .9 8.9 2.8 13L480 416l-128 0 0-48c0-26.5-21.5-48-48-48l-32 0c-26.5 0-48 21.5-48 48l0 48L96 416zm160 0l0-48c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 48-64 0z" />
    </Icon>
);

export default HatWitch;