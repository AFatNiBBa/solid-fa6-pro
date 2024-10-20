
import { Icon, generic } from "../../index";

/**
 * A component that renders the `tomato` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/tomato?s=sharp-duotone-solid tomato}
 * @preview ![tomato](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/tomato.svg)
 */
const Tomato: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 304C0 434.9 114.6 512 256 512s256-77.1 256-208c0-77.8-40.5-136.7-103.2-171.6c-13.6 3.9-27.2 7.7-40.8 11.6c5.3 16 10.7 32 16 48c-42.7-16-85.3-32-128-48c-42.7 16-85.3 32-128 48c5.3-16 10.7-32 16-48c-13.6-3.9-27.2-7.7-40.8-11.6C40.5 167.3 0 226.2 0 304z" />
        <path d="M250.6 20L235.4 1.4 198.2 31.8l15.1 18.5 .1 .2c.1 .2 .4 .5 .7 .9c.7 .9 1.7 2.3 3 4.2c2.6 3.7 6 9.2 9.5 15.9c1.6 3 3.1 6.2 4.5 9.6C147.8 88.1 87.5 128 87.5 128L144 144l-16 48 128-48s0 0 0 0l128 48-16-48 56.5-16s-59.6-39.5-142.4-46.8c-3.6-12.2-8.3-22.9-12.8-31.7c-4.5-8.8-9.1-16-12.5-21c-1.7-2.5-3.2-4.5-4.3-6c-.5-.7-1-1.3-1.3-1.7l-.4-.5-.1-.2c0 0 0 0-.1-.1c0 0 0 0 0 0s0 0 0 0L232 35.2 250.6 20z" />
    </Icon>
);

export default Tomato;