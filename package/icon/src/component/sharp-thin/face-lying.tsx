
import { Icon } from "../../index";

/**
 * A component that renders the `face-lying` icon from the `sharp-thin` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/face-lying?s=sharp-thin face-lying}
 * @preview ![face-lying](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-thin/face-lying.svg)
 */
const FaceLying: typeof Icon = x => (
    <Icon {...x}>
        <path d="M256 16C123.5 16 16 123.5 16 256s107.5 240 240 240c85.5 0 160.5-44.7 203.1-112l13.5 8.5C427.3 464.3 347.2 512 256 512C114.6 512 0 397.4 0 256S114.6 0 256 0C373.8 0 472.9 79.5 502.8 187.7L487.4 192C459.4 90.5 366.4 16 256 16zM160.4 176a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm160 0a16 16 0 1 1 32 0 16 16 0 1 1 -32 0zm-154 220.8l-4.8 6.4-12.8-9.6 4.8-6.4C173.3 361 204.7 344 240 344c15.3 0 30 3.2 43.2 9l7.3 3.2-6.4 14.7-7.3-3.2c-11.3-4.9-23.7-7.7-36.8-7.7c-30.1 0-56.8 14.4-73.6 36.8zM288 232l160 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-96 0-8 0 0-16 8 0 96 0c22.1 0 40-17.9 40-40s-17.9-40-40-40l-160 0-8 0 0-16 8 0z" />
    </Icon>
);

export default FaceLying;