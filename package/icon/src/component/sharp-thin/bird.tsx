
import { Icon } from "../../index";

/**
 * A component that renders the `bird` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/bird?s=sharp-thin bird}
 * @preview ![bird](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/bird.svg)
 */
const Bird: typeof Icon = x => (
    <Icon {...x}>
        <path d="M224 176L16 176l0 8c0 110.5 89.5 200 200 200s200-89.5 200-200l0-80c0-7.4-.9-14.6-2.6-21.5l-.5-.3 .3-.4C403.3 44 368.9 16 328 16c-48.6 0-88 39.4-88 88l0 56 0 16-16 0zM431.6 94.7c.3 3.1 .4 6.2 .4 9.3l0 57.1L481.6 128l-50-33.3zm.4 85.6l0 3.7c0 95.2-61.5 176-147 204.7L357.3 512l-18.6 0L269.2 393.4c-17 4.3-34.8 6.6-53.2 6.6c-6 0-11.9-.2-17.8-.7L261.7 512l-18.4 0L178.4 396.7C77 379 0 290.5 0 184l0-8 0-16 16 0 192 0 16 0 0-16 0-40C224 46.6 270.6 0 328 0c46.4 0 85.8 30.4 99.1 72.5l1.3 .9 72 48 10 6.7-10 6.7L432 180.3zM320 112a16 16 0 1 1 32 0 16 16 0 1 1 -32 0z" />
    </Icon>
);

export default Bird;