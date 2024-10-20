
import { Icon, generic } from "../../index";

/**
 * A component that renders the `burger-glass` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/burger-glass?s=duotone burger-glass}
 * @preview ![burger-glass](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/burger-glass.svg)
 */
const BurgerGlass: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 32c0 .8 0 1.5 .1 2.3L28.9 437.7c3 41.9 37.8 74.3 79.8 74.3L272 512c-10-13.4-16-30-16-48c0-14.7 6.6-27.8 17-36.6c-10.5-11.4-17-26.6-17-43.4c0-18.5 7.8-35.1 20.3-46.8c-12.4-10.9-20.3-26.9-20.3-44.8c0-6.3 1-13.8 4.4-21.5c5.5-12.5 20.5-40.4 52.7-65.3c16.2-12.5 36.3-23.8 60.9-32l10-139.4c.1-.8 .1-1.5 .1-2.3c0-8.1-3-15.9-8.6-21.8C369.4 3.7 360.9 0 352 0L32 0C23.1 0 14.6 3.7 8.6 10.2C3 16.1 0 23.9 0 32zM66.4 64l251.3 0-6.9 96L73.2 160 66.4 64z" />
        <path d="M612.5 319.8c15.2 0 27.5-12.3 27.5-27.5c0-3-.5-5.9-1.7-8.6c-8.1-18.4-48.4-91.9-174.3-91.9s-166.2 73.5-174.3 91.9c-1.2 2.7-1.7 5.7-1.7 8.6c0 15.2 12.3 27.5 27.5 27.5l296.9 0zM368 255.8a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm96-32a16 16 0 1 1 0 32 16 16 0 1 1 0-32zm64 32a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-240 128c0 17.7 14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0c-17.7 0-32 14.3-32 32zm0 80c0 26.5 21.5 48 48 48l256 0c26.5 0 48-21.5 48-48c0-8.8-7.2-16-16-16l-320 0c-8.8 0-16 7.2-16 16z" />
    </Icon>
);

export default BurgerGlass;