
import { Icon } from "../../index";

/**
 * A component that renders the `pickaxe` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/pickaxe?s=sharp-thin pickaxe}
 * @preview ![pickaxe](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/pickaxe.svg)
 */
const Pickaxe: typeof Icon = x => (
    <Icon {...x}>
        <path d="M476.9 369.3C445.2 294.9 402.7 226.7 344 168S217.1 66.8 142.7 35.1l1.3-.5C238.1-3.5 349.5 19.2 421.3 91.3c71.6 71.9 94 182.9 56.1 276.7l-.5 1.3zm8.7 21.2l6.7-16.6c40.4-99.7 16.6-217.6-59.6-294C356.3 3.4 238-20.7 138 19.8l-16.6 6.7L99.6 35.3c7.3 2.7 14.6 5.5 21.9 8.4c78.8 31.6 150.4 74.8 211.2 135.6s104 132.4 135.6 211.2c2.9 7.2 5.7 14.5 8.4 21.9l8.8-21.8zM283.8 177.4L0 472l40 40L334.6 228.2c-3.5-4-7-7.9-10.7-11.9L40.2 489.6 22.4 471.8 295.7 188.2c-4-3.7-7.9-7.2-11.9-10.7zM429.7 18.3L424 12.7 412.7 24l5.7 5.7 64 64 5.7 5.7L499.3 88l-5.7-5.7-64-64z" />
    </Icon>
);

export default Pickaxe;