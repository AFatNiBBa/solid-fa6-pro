
import { Icon, generic } from "../../index";

/**
 * A component that renders the `calendar-circle-user` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/calendar-circle-user?s=duotone calendar-circle-user}
 * @preview ![calendar-circle-user](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/calendar-circle-user.svg)
 */
const CalendarCircleUser: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M0 112l0 48 448 0 0-48c0-26.5-21.5-48-48-48l-48 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32L160 64l0-32c0-17.7-14.3-32-32-32S96 14.3 96 32l0 32L48 64C21.5 64 0 85.5 0 112zm0 80L0 464c0 26.5 21.5 48 48 48l282.8 0C285.6 480.1 256 427.5 256 368c0-91.8 70.3-167.2 160-175.3l0-.7L0 192z" />
        <path d="M432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288zm0-32c-30.2 0-57.5-11.9-77.7-31.3c6.2-19 24-32.7 45.1-32.7l65.2 0c21 0 38.9 13.7 45.1 32.7C489.5 468.1 462.2 480 432 480zm0-192a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
    </Icon>
);

export default CalendarCircleUser;