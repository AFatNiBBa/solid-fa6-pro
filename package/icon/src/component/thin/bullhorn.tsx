
import { Icon } from "../../index";

/**
 * A component that renders the `bullhorn` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bullhorn?s=thin bullhorn}
 * @preview ![bullhorn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/bullhorn.svg)
 */
const Bullhorn: typeof Icon = x => (
    <Icon {...x}>
        <path d="M464 32c0-28.1-33.7-42.6-54.1-23.2l-44 41.9C326.4 88.4 277 113.4 224 123.3l0 16.3c57.1-10 110.4-36.7 152.9-77.2l44-41.9c10.2-9.7 27-2.5 27 11.6l0 416c0 14.1-16.8 21.3-27 11.6l-44-41.9c-42.5-40.5-95.8-67.2-152.9-77.2l0 16.3c53 9.9 102.4 34.9 141.9 72.5l44 41.9c20.4 19.4 54.1 5 54.1-23.2l0-134.7c28.3-12.3 48-40.5 48-73.3s-19.7-61-48-73.3L464 32zM192 416l0-63.3 0-16 0-193.2 0-16c-6.4 .4-12.8 .7-19.2 .7L160 128l-96 0c-35.3 0-64 28.7-64 64l0 96c0 35.3 28.7 64 64 64l0 120c0 22.1 17.9 40 40 40l48 0c22.1 0 40-17.9 40-40l0-56zM464 295.4l0-110.9c19.1 11.1 32 31.7 32 55.4s-12.9 44.4-32 55.4zM176 352l0 120c0 13.3-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24l0-120 80 0 12.8 0c1.1 0 2.1 0 3.2 0zm-3.2-16L160 336l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48l96 0 12.8 0c1.1 0 2.1 0 3.2 0l0 192c-1.1 0-2.1 0-3.2 0z" />
    </Icon>
);

export default Bullhorn;