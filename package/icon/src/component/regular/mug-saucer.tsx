
import { Icon } from "../../index";

/**
 * A component that renders the `mug-saucer` icon from the `regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/mug-saucer?s=regular mug-saucer}
 * @preview ![mug-saucer](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/regular/mug-saucer.svg)
 */
const MugSaucer: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M144 80l288 0 0 208c0 26.5-21.5 48-48 48l-192 0c-26.5 0-48-21.5-48-48l0-208zM128 32c-17.7 0-32 14.3-32 32l0 224c0 53 43 96 96 96l192 0c53 0 96-43 96-96l32 0c70.7 0 128-57.3 128-128s-57.3-128-128-128l-64 0L128 32zM512 240l-32 0 0-160 32 0c44.2 0 80 35.8 80 80s-35.8 80-80 80zM24 432c-13.3 0-24 10.7-24 24s10.7 24 24 24l528 0c13.3 0 24-10.7 24-24s-10.7-24-24-24L24 432z" />
    </Icon>
);

export default MugSaucer;