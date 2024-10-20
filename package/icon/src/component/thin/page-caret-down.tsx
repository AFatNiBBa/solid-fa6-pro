
import { Icon } from "../../index";

/**
 * A component that renders the `page-caret-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/page-caret-down?s=thin page-caret-down}
 * @preview ![page-caret-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/page-caret-down.svg)
 */
const PageCaretDown: typeof Icon = x => (
    <Icon viewBox="0 0 384 512" {...x}>
        <path d="M320 496L64 496c-26.5 0-48-21.5-48-48L16 64c0-26.5 21.5-48 48-48l181.5 0c12.7 0 24.9 5.1 33.9 14.1l74.5 74.5c9 9 14.1 21.2 14.1 33.9L368 448c0 26.5-21.5 48-48 48zM64 512l256 0c35.3 0 64-28.7 64-64l0-309.5c0-17-6.7-33.3-18.7-45.3L290.7 18.7C278.7 6.7 262.5 0 245.5 0L64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64zM267.7 253.4L192 336l-75.7-82.6c-4.7-5.1-1.1-13.4 5.9-13.4l139.6 0c7 0 10.6 8.3 5.9 13.4zm-87.5 93.4c3 3.3 7.3 5.2 11.8 5.2s8.8-1.9 11.8-5.2l75.7-82.6c14.1-15.4 3.2-40.2-17.7-40.2l-139.6 0c-20.9 0-31.8 24.8-17.7 40.2l75.7 82.6z" />
    </Icon>
);

export default PageCaretDown;