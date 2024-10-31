
import { Icon } from "../../index";

/**
 * A component that renders the `reflect-horizontal` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/reflect-horizontal?s=regular reflect-horizontal}
 * @preview ![reflect-horizontal](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/reflect-horizontal.svg)
 */
const ReflectHorizontal: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 0c13.3 0 24 10.7 24 24l0 464c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-464c0-13.3 10.7-24 24-24zM48 166.6l0 178.7L137.4 256 48 166.6zM0 128c0-12.9 7.8-24.6 19.8-29.6s25.7-2.2 34.9 6.9l128 128c12.5 12.5 12.5 32.8 0 45.3l-128 128c-9.2 9.2-22.9 11.9-34.9 6.9S0 396.9 0 384L0 128zM374.6 256L464 345.4l0-178.7L374.6 256zM492.2 98.4c12 5 19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9z" />
    </Icon>
);

export default ReflectHorizontal;