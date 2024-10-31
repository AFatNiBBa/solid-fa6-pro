
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=sharp-thin ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C135.6 0 64 71.6 64 160c0 5.6 .3 11 .8 16.5C37.3 180 16 203.5 16 232l0 48 0 8 8 0 40 0 66.7 0 186.6 0 66.7 0 40 0 8 0 0-8 0-48c0-28.5-21.3-52-48.8-55.5c.6-5.4 .8-10.9 .8-16.5C384 71.6 312.4 0 224 0zM80 160C80 80.5 144.5 16 224 16s144 64.5 144 144c0 7.7-.6 15.3-1.8 22.7l-1.5 9.3 9.4 0 1.9 0c22.1 0 40 17.9 40 40l0 40-32 0-66.7 0-186.6 0L64 272l-32 0 0-40c0-22.1 17.9-40 40-40l1.9 0 9.4 0-1.5-9.3c-1.2-7.4-1.8-15-1.8-22.7zM214.5 497.2L224 512l9.5-14.8L347.4 320l-19 0L224 482.4 119.6 320l-19 0L214.5 497.2z" />
    </Icon>
);

export default IceCream;