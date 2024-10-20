
import { Icon } from "../../index";

/**
 * A component that renders the `worm` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/worm?s=sharp-regular worm}
 * @preview ![worm](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/worm.svg)
 */
const Worm: typeof Icon = x => (
    <Icon {...x}>
        <path d="M400 192l0 176c0 35.3-28.7 64-64 64s-64-28.7-64-64l0-48c0-53-43-96-96-96s-96 43-96 96l0 128 0 16 32 0 0-16 0-128c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48c0 53 43 96 96 96s96-43 96-96l0-176 0-72 0-72-96 0c-26.5 0-48 21.5-48 48s21.5 48 48 48l16 0 48 0 0 48zM176 176c15.9 0 31.2 2.6 45.5 7.3c27.7 9.2 51.7 26.6 69 49.3c5.1 6.7 9.6 13.8 13.5 21.3c10.2 19.8 16 42.2 16 66l0 20.3 0 27.7c0 8.8 7.2 16 16 16s16-7.2 16-16l0-27.7 0-20.3 0-76.9 0-3.1 0-48-16 0c-6.3 0-12.5-.6-18.5-1.8c-27.6-5.4-51-22.6-64.7-46.2c-8.2-14.1-12.8-30.5-12.8-48c0-53 43-96 96-96l96 0 48 0 0 48 0 72 0 72 0 176c0 79.5-64.5 144-144 144c-55.7 0-104.1-31.7-128-78c-10.2-19.8-16-42.2-16-66l0-20.3 0-27.7c0-8.8-7.2-16-16-16s-16 7.2-16 16l0 27.7 0 20.3 0 76.9 0 3.1 0 16 0 48-48 0-32 0-48 0 0-48 0-16 0-128c0-79.5 64.5-144 144-144zM376 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default Worm;