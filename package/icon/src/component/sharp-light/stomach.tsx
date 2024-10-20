
import { Icon } from "../../index";

/**
 * A component that renders the `stomach` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/stomach?s=sharp-light stomach}
 * @preview ![stomach](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/stomach.svg)
 */
const Stomach: typeof Icon = x => (
    <Icon {...x}>
        <path d="M160 16l0-16L128 0l0 16 0 160 0 16 16 0 116 0c-2.6 10.2-4 21-4 32l0 48c0 44.2-35.8 80-80 80L64 352l-16 0-32 0L0 352l0 16L0 496l0 16 32 0 0-16 0-112 16 0 16 0c25.1 0 49.5 12 68.3 31.2c19.2 19.5 46.1 43.5 77.9 62.7C242 497 279.6 512 320 512c106 0 192-86 192-192l0-96c0-70.7-57.3-128-128-128c-47.4 0-88.7 25.7-110.9 64L160 160l0-144zm-4.9 376.7c-3-3-6.1-5.9-9.3-8.7l30.2 0c42.8 0 80-24 98.9-59.4c25.6-11.2 43.6-12.6 57.6-10.2c15.3 2.6 27.6 9.7 42.4 18.4l.5 .3c14.1 8.3 30.9 18.1 52.1 20.7c15.2 1.8 31.7-.2 50.4-7.3C465.2 422.2 399.4 480 320 480c-32.5 0-64.4-12.1-93.2-29.5c-28.8-17.4-53.6-39.4-71.7-57.8zM480 310.5c-21.6 11-36.9 12.9-48.7 11.5c-13.9-1.7-25.4-8.1-40.2-16.8l-1.2-.7c-13.9-8.2-30.7-18-52.1-21.6c-15.1-2.5-31.7-1.8-50.7 3.4c.6-4.7 .9-9.4 .9-14.3l0-48c0-53 43-96 96-96s96 43 96 96l0 86.5z" />
    </Icon>
);

export default Stomach;