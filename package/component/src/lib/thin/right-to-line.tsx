
import { Icon } from "../../index";

/**
 * A component that renders the `right-to-line` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/right-to-line?s=thin right-to-line}
 * @preview ![right-to-line](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/right-to-line.svg)
 */
const RightToLine: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M432 72l0 368c0 4.4 3.6 8 8 8s8-3.6 8-8l0-368c0-4.4-3.6-8-8-8s-8 3.6-8 8zM332.7 248c2.1 2.1 3.3 5 3.3 8s-1.2 5.9-3.3 8L200.6 395.8c-2.7 2.7-6.4 4.2-10.2 4.2c-8 0-14.4-6.5-14.4-14.4l0-73.6c0-4.4-3.6-8-8-8L32 304c-8.8 0-16-7.2-16-16l0-64c0-8.8 7.2-16 16-16l136 0c4.4 0 8-3.6 8-8l0-73.6c0-8 6.5-14.4 14.4-14.4c3.8 0 7.5 1.5 10.2 4.2L332.7 248zm19.3 8c0-7.2-2.9-14.2-8-19.3L211.9 104.9c-5.7-5.7-13.4-8.9-21.5-8.9c-16.8 0-30.4 13.6-30.4 30.4l0 65.6L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l128 0 0 65.6c0 16.8 13.6 30.4 30.4 30.4c8.1 0 15.8-3.2 21.5-8.9L344 275.3c5.1-5.1 8-12.1 8-19.3z" />
    </Icon>
);

export default RightToLine;