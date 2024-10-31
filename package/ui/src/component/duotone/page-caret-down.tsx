
import { Icon, generic } from "../../index";

/**
 * A component that renders the `page-caret-down` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-down?s=duotone page-caret-down}
 * @preview ![page-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/page-caret-down.svg)
 */
const PageCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path class={generic.secondary} d="M0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-309.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L64 0C28.7 0 0 28.7 0 64zM98.3 245.8c.1-.8 .2-1.5 .3-2.3c.3-1.5 .7-3 1.3-4.4c1.1-2.8 2.8-5.5 4.9-7.7c4.2-4.5 10.2-7.4 17.4-7.4l139.6 0c20.9 0 31.8 24.8 17.7 40.2l-75.7 82.6c-3 3.3-7.3 5.2-11.8 5.2s-8.8-1.9-11.8-5.2c-25.2-27.5-50.5-55.1-75.7-82.6c-2.2-2.4-3.8-5-4.8-7.7c-.5-1.4-.9-2.7-1.2-4.1c-.1-.7-.2-1.4-.3-2.1s-.1-1.4-.1-2.1c0-.8 0-1.5 .1-2.3z" />
        <path d="M180.2 346.8c3 3.3 7.3 5.2 11.8 5.2s8.8-1.9 11.8-5.2l75.7-82.6c14.1-15.4 3.2-40.2-17.7-40.2l-139.6 0c-20.9 0-31.8 24.8-17.7 40.2l75.7 82.6z" />
    </Icon>
);

export default PageCaretDown;