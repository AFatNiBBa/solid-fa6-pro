
import { Icon } from "../../index";

/**
 * A component that renders the `dumpster-fire` icon from the `sharp-regular` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/dumpster-fire?s=sharp-regular dumpster-fire}
 * @preview ![dumpster-fire](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-regular/dumpster-fire.svg)
 */
const DumpsterFire: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M32 32L0 160l114.9 0L140.5 32 32 32zM272 160l0-128-98.9 0L147.5 160 272 160zm32 0l56.5 0c19.7-21.2 40.4-38.5 57.8-50.8L402.9 32 304 32l0 128zm260.5-24.7c2.3 1.9 4.6 3.8 6.8 5.8L544 32 435.5 32l11.7 58.6 5.4-3.4L512 146.6l30-30 22.5 18.7zM80.4 192L32 192l4 32-12 0L0 224l0 48 24 0 18 0L64 448l0 8 0 24 48 0 0-24 0-8 225 0c-12.8-14.2-23.5-30.4-31.5-48l-199.1 0-20-160L306 240c7.8-17.4 17.6-33.5 28.1-48L80.4 192zM448 128c-42.7 26.7-128 102.4-128 192c0 88.4 71.6 160 160 160s160-71.6 160-160c0-26.7-19.2-96-96-160l-32 32-64-64zm96 240.2c0 35.3-28.7 64-64 64s-64-28.7-64-64c0-48 64-96 64-96s64 48 64 96z" />
    </Icon>
);

export default DumpsterFire;