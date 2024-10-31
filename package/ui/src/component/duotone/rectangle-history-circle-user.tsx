
import { Icon, generic } from "../../index";

/**
 * A component that renders the `rectangle-history-circle-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/rectangle-history-circle-user?s=duotone rectangle-history-circle-user}
 * @preview ![rectangle-history-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/rectangle-history-circle-user.svg)
 */
const RectangleHistoryCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 224L0 448c0 35.3 28.7 64 64 64l330.8 0C349.5 480.1 320 427.5 320 368c0-97.2 78.8-176 176-176c2.5 0 5 .1 7.5 .2c-11-19.2-31.8-32.2-55.5-32.2L64 160c-35.3 0-64 28.7-64 64zM48 104c0 13.3 10.7 24 24 24l368 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L72 80c-13.3 0-24 10.7-24 24zM96 24c0 13.3 10.7 24 24 24l272 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L120 0C106.7 0 96 10.7 96 24z" />
        <path d="M496 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-30.2 0-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7l65.2 0c21 0 38.9 13.7 45.1 32.7C553.5 468.1 526.2 480 496 480zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default RectangleHistoryCircleUser;