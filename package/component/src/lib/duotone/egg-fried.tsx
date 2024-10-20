
import { Icon, generic } from "../../index";

/**
 * A component that renders the `egg-fried` icon from the `duotone` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/egg-fried?s=duotone egg-fried}
 * @preview ![egg-fried](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/duotone/egg-fried.svg)
 */
const EggFried: typeof Icon = x => (
    <Icon {...x}>
        <path class={generic.secondary} d="M0 351.8c0 55.3 28.7 109.1 80 138.7c76.5 44.2 174.4 18 218.6-58.6c18.8-32.5 66.1-60 103.3-65.2c20.5-2.9 40.6-10.8 58.4-24c33.9-25.1 51.8-63.8 51.8-102.9c0-26.5-8.2-53.2-25.2-76.1c-18.2-24.6-43.5-40.7-71-47.8c-42.4-10.9-101.2-45.1-131.5-76.7c-49-51-130-52.6-181-3.6C80.1 58 67.1 87 64.5 116.8C60.2 166.1 46.2 229.1 21.4 272C6.9 297.2 0 324.7 0 351.8zM336 240a112 112 0 1 1 -224 0 112 112 0 1 1 224 0z" />
        <path d="M224 352a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM176 232c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-39.8 32.2-72 72-72c8.8 0 16 7.2 16 16s-7.2 16-16 16c-22.1 0-40 17.9-40 40z" />
    </Icon>
);

export default EggFried;