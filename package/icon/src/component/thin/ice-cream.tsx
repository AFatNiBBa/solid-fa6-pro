
import { Icon } from "../../index";

/**
 * A component that renders the `ice-cream` icon from the `thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/ice-cream?s=thin ice-cream}
 * @preview ![ice-cream](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/thin/ice-cream.svg)
 */
const IceCream: typeof Icon = x => (
    <Icon viewBox="0 0 448 512" {...x}>
        <path d="M224 0C135.6 0 64 71.6 64 160c0 5.6 .3 11 .8 16.5C37.3 180 16 203.5 16 232c0 30.9 25.1 56 56 56l58.7 0 186.6 0 58.7 0c30.9 0 56-25.1 56-56c0-28.5-21.3-52-48.8-55.5c.6-5.4 .8-10.9 .8-16.5C384 71.6 312.4 0 224 0zM80 160C80 80.5 144.5 16 224 16s144 64.5 144 144c0 7.7-.6 15.3-1.8 22.7c-.4 2.3 .3 4.7 1.8 6.4s3.7 2.8 6.1 2.8l1.9 0c22.1 0 40 17.9 40 40s-17.9 40-40 40l-58.7 0-186.6 0L72 272c-22.1 0-40-17.9-40-40s17.9-40 40-40l1.9 0c2.3 0 4.6-1 6.1-2.8s2.2-4.1 1.8-6.4c-1.2-7.4-1.8-15-1.8-22.7zM200.1 498.1c4.9 8.6 14 13.9 23.9 13.9s19-5.3 23.9-13.9L349.7 320l-18.4 0L234 490.2c-2.1 3.6-5.9 5.8-10 5.8s-8-2.2-10-5.8L116.7 320l-18.4 0L200.1 498.1z" />
    </Icon>
);

export default IceCream;