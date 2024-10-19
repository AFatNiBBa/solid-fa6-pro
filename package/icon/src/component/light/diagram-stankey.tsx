
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `diagram-stankey` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/diagram-stankey?s=light diagram-stankey}
 * @preview ![diagram-stankey](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00OCAyMjRIMjg4QzI5My42MjUgMjI0IDI5OC44MTIgMjIxLjA0NyAzMDEuNzE5IDIxNi4yMzRMMzg4LjQwNiA3MS43NjZDMzkxLjI4MSA2Ni45NjkgMzk2LjUzMSA2NCA0MDIuMTI1IDY0SDU5MkM2MDAuODQ0IDY0IDYwOCA1Ni44NDQgNjA4IDQ4UzYwMC44NDQgMzIgNTkyIDMySDQwMi4xMjVDMzg1LjM0NCAzMiAzNjkuNTk0IDQwLjkyMiAzNjAuOTY5IDU1LjI5N0wyNzguOTM4IDE5Mkg0OEMzOS4xNTYgMTkyIDMyIDE5OS4xNTYgMzIgMjA4UzM5LjE1NiAyMjQgNDggMjI0Wk02MDggMzA0QzYwOCAyOTUuMTU2IDYwMC44NDQgMjg4IDU5MiAyODhINDhDMzkuMTU2IDI4OCAzMiAyOTUuMTU2IDMyIDMwNFMzOS4xNTYgMzIwIDQ4IDMyMEgxOTguOTM4TDI4MC45NjkgNDU2LjcwM0MyODkuNTk0IDQ3MS4wNzggMzA1LjM0NCA0ODAgMzIyLjEyNSA0ODBINTkyQzYwMC44NDQgNDgwIDYwOCA0NzIuODQ0IDYwOCA0NjRTNjAwLjg0NCA0NDggNTkyIDQ0OEgzMjIuMTI1QzMxNi41MzEgNDQ4IDMxMS4yODEgNDQ1LjAzMSAzMDguNDA2IDQ0MC4yMzRMMjM2LjI2IDMyMEg1OTJDNjAwLjg0NCAzMjAgNjA4IDMxMi44NDQgNjA4IDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function DiagramStankey(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M48 224H288C293.625 224 298.812 221.047 301.719 216.234L388.406 71.766C391.281 66.969 396.531 64 402.125 64H592C600.844 64 608 56.844 608 48S600.844 32 592 32H402.125C385.344 32 369.594 40.922 360.969 55.297L278.938 192H48C39.156 192 32 199.156 32 208S39.156 224 48 224ZM608 304C608 295.156 600.844 288 592 288H48C39.156 288 32 295.156 32 304S39.156 320 48 320H198.938L280.969 456.703C289.594 471.078 305.344 480 322.125 480H592C600.844 480 608 472.844 608 464S600.844 448 592 448H322.125C316.531 448 311.281 445.031 308.406 440.234L236.26 320H592C600.844 320 608 312.844 608 304Z" />
        </Icon>
    </>
}