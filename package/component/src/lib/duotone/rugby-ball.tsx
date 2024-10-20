
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rugby-ball` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rugby-ball?s=duotone rugby-ball}
 * @preview ![rugby-ball](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rugby-ball.svg)
 */
const RugbyBall: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M16 336C16 159.3 159.3 16 336 16l32 0c30.1 0 57.7 10.4 79.5 27.7c-8.5-4.2-18.8-6.3-30.4-6.3c-59.1 0-153.9 52.9-240.4 139.4C73.4 280.2 17.9 395.7 43.7 447.5C26.4 425.7 16 398.1 16 368l0-32zM64.4 468.3c51.9 25.8 167.3-29.7 270.7-133.1S494.1 116.4 468.3 64.5C485.6 86.3 496 113.9 496 144l0 32c0 176.7-143.3 320-320 320l-32 0c-30.1 0-57.7-10.4-79.6-27.7z" />
        <path d="M64.4 468.3c-7.7-6.1-14.6-13.1-20.7-20.7C17.9 395.7 73.4 280.2 176.8 176.8S395.7 17.9 447.5 43.7c7.7 6.1 14.6 13.1 20.7 20.7c25.8 51.9-29.7 167.3-133.1 270.7S116.3 494.1 64.4 468.3z" />
    </Icon>
);

export default RugbyBall;