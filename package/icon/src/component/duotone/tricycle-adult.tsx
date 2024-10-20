
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tricycle-adult` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tricycle-adult?s=duotone tricycle-adult}
 * @preview ![tricycle-adult](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/tricycle-adult.svg)
 */
const TricycleAdult: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 352c0-24.4 9.1-46.6 24-63.5C41.6 268.6 67.4 256 96 256c41.9 0 77.5 26.8 90.6 64.2c3.5 10 5.4 20.7 5.4 31.8c0 16.9-4.3 32.7-12 46.5c3.8 1 7.8 1.5 12 1.5c26.5 0 48-21.5 48-48c0-8.1-2-15.8-5.6-22.5c17.6 3.4 35.2 6.9 52.8 10.3c.5 4 .8 8.1 .8 12.2c0 53-43 96-96 96c-17.5 0-33.9-4.7-48-12.8c-14.1 8.2-30.5 12.8-48 12.8c-53 0-96-43-96-96zM33.9 138.8c-6-16.6 2.7-35 19.3-40.9C56.8 96.6 60.4 96 64 96c13.1 0 25.4 8.1 30.1 21.2l14.9 41.7c1.9 5.2 6.3 9.1 11.8 10.3l77.7 16.3c17.3 3.6 28.4 20.6 24.7 37.9s-20.6 28.4-37.9 24.7l-77.7-16.3c-27.2-5.7-49.5-25.1-58.9-51.3L33.9 138.8zM48 352a48 48 0 1 0 96 0 48 48 0 1 0 -96 0zm592 0a96 96 0 1 1 -192 0 96 96 0 1 1 192 0zm-144 0a48 48 0 1 0 96 0 48 48 0 1 0 -96 0z" />
        <path d="M312 64c-13.3 0-24 10.7-24 24s10.7 24 24 24l31.4 0c2.6 0 5 1.3 6.5 3.4l79.2 112.5-48.2 64.3c-5.6 7.5-14.4 11.9-23.7 11.9c-1.9 0-3.8-.2-5.7-.5l-322.9-63c-13-2.5-25.6 6-28.2 19s6 25.6 19 28.2l4.6 .9C41.6 268.6 67.4 256 96 256c41.9 0 77.5 26.8 90.6 64.2l155.7 30.4c4.9 1 9.9 1.4 14.9 1.4c24.4 0 47.4-11.5 62.1-31.1l38.8-51.8 13.7 19.5c10.6-12.1 24.2-21.5 39.7-27L389.2 87.8C378.7 72.9 361.6 64 343.4 64L312 64z" />
    </Icon>
);

export default TricycleAdult;