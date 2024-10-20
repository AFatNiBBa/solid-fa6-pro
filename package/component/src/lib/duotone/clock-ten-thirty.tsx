
import { Icon, generic } from "../../index";

/**
 * A component that renders the `clock-ten-thirty` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/clock-ten-thirty?s=duotone clock-ten-thirty}
 * @preview ![clock-ten-thirty](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/clock-ten-thirty.svg)
 */
const ClockTenThirty: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zm140-77.3c4.6-6.9 12.2-10.7 20-10.7c4.6 0 9.2 1.3 13.3 4c32 21.3 64 42.7 96 64C276 240.5 280 248 280 256c0 45.3 0 90.7 0 136c0 13.3-10.7 24-24 24c-6.6 0-12.6-2.7-17-7c-2.2-2.2-3.9-4.8-5.1-7.6c-.6-1.4-1.1-2.9-1.4-4.5c-.2-.8-.3-1.6-.4-2.4s-.1-1.6-.1-2.5c0-41 0-82.1 0-123.2c-28.4-19-56.9-37.9-85.3-56.9c-11-7.4-14-22.3-6.7-33.3z" />
        <path d="M256 416c13.3 0 24-10.7 24-24l0-136c0-8-4-15.5-10.7-20l-96-64c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3L232 268.8 232 392c0 13.3 10.7 24 24 24z" />
    </Icon>
);

export default ClockTenThirty;