
import { Icon, generic } from "../../index";

/**
 * A component that renders the `plane-prop` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/plane-prop?s=sharp-duotone-solid plane-prop}
 * @preview ![plane-prop](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/plane-prop.svg)
 */
const PlaneProp: typeof Icon = x => (
    <Icon viewBox="0 0 576 512" {...x}>
        <path class={generic.secondary} d="M231.7 194.4c2.8-22.1 5.5-44.3 8.3-66.4c2.7-21.3 5.3-42.7 8-64s5.3-42.7 8-64l64 0 8 64 8 64 8 64-88 0-24.3 2.4z" />
        <path d="M231.7 317.6L256 320l88 0 138.3 0c34.2 0 93.7-28 93.7-64c0-35-59.5-64-93.7-64L344 192l-88 0-24.3 2.4-110 11L112 128l-64 0L36 224.2c-1.3-.2-2.6-.2-4-.2c-17.7 0-32 14.3-32 32s14.3 32 32 32c1.3 0 2.7-.1 4-.2L48 384l64 0 9.7-77.4 110 11zM336 128l32 0 0 16 0 16 32 0 0-16 0-32 16 0 0-32-16 0 0-32 0-16-32 0 0 16 0 16-40 0 8 64zM248 64l-56 0 0 64 48 0 8-64zm-8 320l-48 0 0 64 56 0-8-64zm88 64l40 0 0 16 0 16 32 0 0-16 0-32 16 0 0-32-16 0 0-32 0-16-32 0 0 16 0 16-32 0-8 64z" />
    </Icon>
);

export default PlaneProp;