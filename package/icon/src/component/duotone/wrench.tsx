
import { Icon, generic } from "../../index";

/**
 * A component that renders the `wrench` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/wrench?s=duotone wrench}
 * @preview ![wrench](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/wrench.svg)
 */
const Wrench: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c-44.5-16.1-79.9-51.5-96-96L19.9 396.1C7.2 408.8 0 426.1 0 444.1zM104 432a24 24 0 1 1 -48 0 24 24 0 1 1 48 0z" />
        <path d="M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7L336 192c-8.8 0-16-7.2-16-16l0-57.4c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160s71.6 160 160 160z" />
    </Icon>
);

export default Wrench;