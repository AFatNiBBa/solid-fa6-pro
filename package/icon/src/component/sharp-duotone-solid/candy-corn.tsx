
import { Icon, generic } from "../../index";

/**
 * A component that renders the `candy-corn` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/candy-corn?s=sharp-duotone-solid candy-corn}
 * @preview ![candy-corn](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/candy-corn.svg)
 */
const CandyCorn: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 334.2s0-44.4 88.9-133.3S222.2 112 222.2 112l54.9 54.9c-23.8 13.8-70 44.1-124.1 98.2c-54 54-84.3 100.1-98.1 123.9L0 334.2zM216.6 458.6c15.6-20.3 35.7-43.8 60.8-69c25.3-25.3 48.8-45.3 69.1-61c17.8 46.3 35.6 92.6 53.4 138.9L355.6 512c-46.3-17.8-92.6-35.6-139-53.4zM320 32s32-32 160-32S640 32 640 32l0 83c-25.5-7-80.7-19-160-19s-134.5 12-160 19l0-83zm66.6 245.9c25.7-3.4 57-5.9 93.4-5.9s67.7 2.5 93.4 5.9L512 416l-64 0L386.6 277.9z" />
        <path d="M327.6 145c28-7.1 80.3-17 152.4-17s124.4 10 152.4 17L573.4 277.9c-25.7-3.4-57-5.9-93.4-5.9s-67.7 2.5-93.4 5.9L327.6 145zM80.7 406.3c15.1-25.1 44.8-68.4 94.9-118.5c50.2-50.2 93.6-80 118.7-95l52.3 135.9c-20.3 15.6-43.9 35.7-69.1 61c-25.2 25.2-45.2 48.7-60.8 69L80.7 406.3z" />
    </Icon>
);

export default CandyCorn;