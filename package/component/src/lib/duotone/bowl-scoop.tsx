
import { Icon, generic } from "../../index";

/**
 * A component that renders the `bowl-scoop` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bowl-scoop?s=duotone bowl-scoop}
 * @preview ![bowl-scoop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/bowl-scoop.svg)
 */
const BowlScoop: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M32 224c0 10.9 .9 21.6 2.7 32l378.7 0c1.7-10.4 2.7-21.1 2.7-32c0-106-86-192-192-192S32 118 32 224z" />
        <path d="M4 261.4c3-3.4 7.4-5.4 12-5.4l416 0c4.6 0 9 2 12 5.4s4.5 8 3.9 12.6l-2 15.9C436.9 361.9 375.6 416 303 416l-40.4 0 68.7 68.7c4.6 4.6 5.9 11.5 3.5 17.4s-8.3 9.9-14.8 9.9l-192 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4L185.4 416 145 416C72.4 416 11.1 361.9 2.1 289.9L.1 274c-.6-4.6 .8-9.1 3.9-12.6z" />
    </Icon>
);

export default BowlScoop;