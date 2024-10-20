
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dryer-heat` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer-heat?s=sharp-duotone-solid dryer-heat}
 * @preview ![dryer-heat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dryer-heat.svg)
 */
const DryerHeat: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M148.7 227.3L177.4 256c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16l-9.4 9.4c-10.2 10.2-16 24.1-16 38.6s5.8 28.4 16 38.6l28.7 28.7 22.6-22.6L190.6 352c-4.2-4.2-6.6-10-6.6-16s2.4-11.8 6.6-16l9.4-9.4c10.2-10.2 16-24.1 16-38.6s-5.8-28.4-16-38.6l-28.7-28.7-22.6 22.6zM160 88a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm68.7 139.3L257.4 256c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16l-9.4 9.4c-10.2 10.2-16 24.1-16 38.6s5.8 28.4 16 38.6l28.7 28.7 22.6-22.6L270.6 352c-4.2-4.2-6.6-10-6.6-16s2.4-11.8 6.6-16l9.4-9.4c10.2-10.2 16-24.1 16-38.6s-5.8-28.4-16-38.6l-28.7-28.7-22.6 22.6z" />
        <path d="M448 0L0 0 0 512l448 0L448 0zM224 160a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM64 88a24 24 0 1 1 48 0A24 24 0 1 1 64 88zM184 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default DryerHeat;