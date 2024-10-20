
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tablet-rugged` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tablet-rugged?s=duotone tablet-rugged}
 * @preview ![tablet-rugged](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tablet-rugged.svg)
 */
const TabletRugged: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M0 73.9l0 76.2c0 6.1 3.4 11.6 8.8 14.3L32 176l0 16L8.8 203.6C3.4 206.3 0 211.8 0 217.9l0 76.2c0 6.1 3.4 11.6 8.8 14.3L32 320l0 16L8.8 347.6C3.4 350.3 0 355.8 0 361.9l0 76.2c0 6.1 3.4 11.6 8.8 14.3l25.5 12.7C41.8 492.2 66.6 512 96 512l256 0c29.4 0 54.2-19.8 61.7-46.8l25.5-12.7c5.4-2.7 8.8-8.2 8.8-14.3l0-76.2c0-6.1-3.4-11.6-8.8-14.3L416 336l0-16 23.2-11.6c5.4-2.7 8.8-8.3 8.8-14.3l0-76.2c0-6.1-3.4-11.6-8.8-14.3L416 192l0-16 23.2-11.6c5.4-2.7 8.8-8.3 8.8-14.3l0-76.2c0-6.1-3.4-11.6-8.8-14.3L413.7 46.8C406.2 19.8 381.4 0 352 0L96 0C66.6 0 41.8 19.8 34.3 46.8L8.8 59.6C3.4 62.3 0 67.8 0 73.9zM96 80c0-8.8 7.2-16 16-16l224 0c8.8 0 16 7.2 16 16l0 352c0 8.8-7.2 16-16 16l-224 0c-8.8 0-16-7.2-16-16L96 80z" />
        <path d="M96 80c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16V432c0 8.8-7.2 16-16 16H112c-8.8 0-16-7.2-16-16V80z" />
    </Icon>
);

export default TabletRugged;