
import { Icon, generic } from "../../index";

/**
 * A component that renders the `dumpster-fire` icon from the `sharp-duotone-solid` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster-fire?s=sharp-duotone-solid dumpster-fire}
 * @preview ![dumpster-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-duotone-solid/dumpster-fire.svg)
 */
const DumpsterFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path class={generic.secondary} d="M0 160l114.9 0L140.5 32 32 32 0 160zm0 64l0 64 44 0L64 448l0 32 64 0 0-32 209 0c-30.5-34-49-78.9-49-128.2c0-49.2 20.9-93.1 46.1-127.8L32 192l4 32L0 224zm147.5-64L272 160l0-128-98.9 0L147.5 160zM304 32l0 128 56.5 0c19.7-21.2 40.4-38.5 57.8-50.8L402.9 32 304 32zm131.5 0l11.7 58.6 5.4-3.4L512 146.6l30-30 22.5 18.7c2.3 1.9 4.6 3.8 6.8 5.8L544 32 435.5 32z" />
        <path d="M320 320c0-89.6 85.3-165.3 128-192l64 64 32-32c76.8 64 96 133.3 96 160c0 88.4-71.6 160-160 160s-160-71.6-160-160zM480 432.2c35.3 0 64-28.7 64-64c0-48-64-96-64-96s-64 48-64 96c0 35.3 28.7 64 64 64z" />
    </Icon>
);

export default DumpsterFire;