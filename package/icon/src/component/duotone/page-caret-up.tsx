
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page-caret-up` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-up?s=duotone page-caret-up}
 * @preview ![page-caret-up](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/page-caret-up.svg)
 */
const PageCaretUp: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-309.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L64 0C28.7 0 0 28.7 0 64zM98.1 295.8c0-5.6 2-11.3 6.4-16.1c25.2-27.5 50.5-55.1 75.7-82.6c3-3.3 7.3-5.2 11.8-5.2s8.8 1.9 11.8 5.2c25.2 27.5 50.5 55.1 75.7 82.6c14.1 15.4 3.2 40.2-17.7 40.2l-139.6 0c-14.4 0-24-11.8-24-24.2z" />
        <path d="M203.8 197.2c-3-3.3-7.3-5.2-11.8-5.2s-8.8 1.9-11.8 5.2l-75.7 82.6c-14.1 15.4-3.2 40.2 17.7 40.2l139.6 0c20.9 0 31.8-24.8 17.7-40.2l-75.7-82.6z" />
    </Icon>
);

export default PageCaretUp;