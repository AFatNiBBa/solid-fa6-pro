
import { Icon } from "../../index";

/**
 * A component that renders the `binary-lock` icon from the `sharp-light` section of Font Awesome 6.6 Pro
 * @see {@link https://fontawesome.com/icons/binary-lock?s=sharp-light binary-lock}
 * @preview ![binary-lock](https://corsproxy.io/?https://site-assets.fontawesome.com/releases/v6.6.0/svgs/sharp-light/binary-lock.svg)
 */
const BinaryLock: typeof Icon = x => (
    <Icon viewBox="0 0 640 512" {...x}>
        <path d="M224 0l0 32 16 0 48 0 0 160-48 0-16 0 0 32 16 0 64 0 64 0 16 0 0-32-16 0-48 0 0-176 0-16L304 0 240 0 224 0zM0 288l0 32 16 0 48 0 0 160-48 0L0 480l0 32 16 0 64 0 64 0 16 0 0-32-16 0-48 0 0-176 0-16-16 0-64 0L0 288zM16 0L0 0 0 16 0 208l0 16 16 0 160 0 16 0 0-16 0-192 0-16L176 0 16 0zM32 192L32 32l128 0 0 160L32 192zm160 96l0 16 0 192 0 16 16 0 160 0 16 0 0-16 0-192 0-16-16 0-160 0-16 0zm32 32l128 0 0 160-128 0 0-160zm304-96c26.5 0 48 21.5 48 48l0 48-96 0 0-48c0-26.5 21.5-48 48-48zm-80 48l0 48-32 0 0 32 0 128 0 32 32 0 160 0 32 0 0-32 0-128 0-32-32 0 0-48c0-44.2-35.8-80-80-80s-80 35.8-80 80zm0 80l160 0 0 128-160 0 0-128z" />
    </Icon>
);

export default BinaryLock;