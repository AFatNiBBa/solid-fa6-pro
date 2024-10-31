
import { Icon } from "../../index";

/**
 * A component that renders the `up-down` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/up-down?s=thin up-down}
 * @preview ![up-down](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/up-down.svg)
 */
const UpDown: typeof Icon = x => (
    <Icon viewBox="0 0 256 512" {...x}>
        <path d="M108.7 8c5.1-5.1 12.1-8 19.3-8s14.2 2.9 19.3 8L247 107.7c5.7 5.7 9 13.5 9 21.7c0 16.9-13.7 30.6-30.6 30.6L176 160l0 192 49.4 0c16.9 0 30.6 13.7 30.6 30.6c0 8.1-3.2 15.9-9 21.7L147.3 504c-5.1 5.1-12.1 8-19.3 8s-14.2-2.9-19.3-8L9 404.3c-5.7-5.7-9-13.5-9-21.7C0 365.7 13.7 352 30.6 352L80 352l0-192-49.4 0C13.7 160 0 146.3 0 129.4c0-8.1 3.2-15.9 9-21.7L108.7 8zM128 16c-3 0-5.9 1.2-8 3.3L20.3 119c-2.7 2.7-4.3 6.5-4.3 10.3c0 8.1 6.5 14.6 14.6 14.6L88 144c4.4 0 8 3.6 8 8l0 208c0 4.4-3.6 8-8 8l-57.4 0c-8.1 0-14.6 6.6-14.6 14.6c0 3.9 1.5 7.6 4.3 10.3L120 492.7l-5.7 5.7 5.7-5.7c2.1 2.1 5 3.3 8 3.3s5.9-1.2 8-3.3l5.7 5.7-5.7-5.7L235.7 393c2.7-2.7 4.3-6.5 4.3-10.3c0-8.1-6.5-14.6-14.6-14.6L168 368c-4.4 0-8-3.6-8-8l0-208c0-4.4 3.6-8 8-8l57.4 0c8.1 0 14.6-6.5 14.6-14.6c0-3.9-1.5-7.6-4.3-10.3L136 19.3c-2.1-2.1-5-3.3-8-3.3z" />
    </Icon>
);

export default UpDown;