
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dryer-heat` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dryer-heat?s=duotone dryer-heat}
 * @preview ![dryer-heat](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/dryer-heat.svg)
 */
const DryerHeat: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path class={generic.secondary} d="M152 224c0 4.1 1.6 8.2 4.7 11.3L177.4 256c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16l-9.4 9.4c-10.2 10.2-16 24.1-16 38.6s5.8 28.4 16 38.6l20.7 20.7c3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7c6.2-6.2 6.2-16.4 0-22.6L190.6 352c-4.2-4.2-6.6-10-6.6-16s2.4-11.8 6.6-16l9.4-9.4c10.2-10.2 16-24.1 16-38.6s-5.8-28.4-16-38.6l-20.7-20.7c-6.2-6.2-16.4-6.2-22.6 0c-3.1 3.1-4.7 7.2-4.7 11.3zm8-136a24 24 0 1 0 48 0 24 24 0 1 0 -48 0zm72 248c0 14.5 5.8 28.4 16 38.6l20.7 20.7c3.1 3.1 7.2 4.7 11.3 4.7s8.2-1.6 11.3-4.7s4.7-7.2 4.7-11.3s-1.6-8.2-4.7-11.3L270.6 352c-4.2-4.2-6.6-10-6.6-16s2.4-11.8 6.6-16l9.4-9.4c10.2-10.2 16-24.1 16-38.6s-5.8-28.4-16-38.6l-20.7-20.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L257.4 256c4.2 4.2 6.6 10 6.6 16s-2.4 11.8-6.6 16l-9.4 9.4c-10.2 10.2-16 24.1-16 38.6z" />
        <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM224 160a144 144 0 1 1 0 288 144 144 0 1 1 0-288zM64 88a24 24 0 1 1 48 0A24 24 0 1 1 64 88zM184 64a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
    </Icon>
);

export default DryerHeat;