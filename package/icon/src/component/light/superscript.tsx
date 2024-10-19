
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `superscript` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/superscript?s=light superscript}
 * @preview ![superscript](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zMzYgOTZDMzQ0Ljg0NCA5NiAzNTIgODguODQ0IDM1MiA4MFMzNDQuODQ0IDY0IDMzNiA2NEgyODhDMjgyLjUzMSA2NCAyNzcuNDM4IDY2Ljc5NyAyNzQuNSA3MS40MDZMMTc2IDIyNi4xOTVMNzcuNSA3MS40MDZDNzQuNTYyIDY2Ljc5NyA2OS40NjkgNjQgNjQgNjRIMTZDNy4xNTYgNjQgMCA3MS4xNTYgMCA4MFM3LjE1NiA5NiAxNiA5Nkg1NS4yMTlMMTU3LjAzNSAyNTZMNTUuMjE5IDQxNkgxNkM3LjE1NiA0MTYgMCA0MjMuMTU2IDAgNDMyUzcuMTU2IDQ0OCAxNiA0NDhINjRDNjkuNDY5IDQ0OCA3NC41NjIgNDQ1LjIwMyA3Ny41IDQ0MC41OTRMMTc2IDI4NS44MDVMMjc0LjUgNDQwLjU5NEMyNzcuNDM4IDQ0NS4yMDMgMjgyLjUzMSA0NDggMjg4IDQ0OEgzMzZDMzQ0Ljg0NCA0NDggMzUyIDQ0MC44NDQgMzUyIDQzMlMzNDQuODQ0IDQxNiAzMzYgNDE2SDI5Ni43ODFMMTk0Ljk2NSAyNTZMMjk2Ljc4MSA5NkgzMzZaTTQ5NiAxNjBINDY0VjE2QzQ2NCA3LjE1NiA0NTYuODQ0IDAgNDQ4IDBINDE2QzQwNy4xNTYgMCA0MDAgNy4xNTYgNDAwIDE2UzQwNy4xNTYgMzIgNDE2IDMySDQzMlYxNjBINDAwQzM5MS4xNTYgMTYwIDM4NCAxNjcuMTU2IDM4NCAxNzZTMzkxLjE1NiAxOTIgNDAwIDE5Mkg0OTZDNTA0Ljg0NCAxOTIgNTEyIDE4NC44NDQgNTEyIDE3NlM1MDQuODQ0IDE2MCA0OTYgMTYwWiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Superscript(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M336 96C344.844 96 352 88.844 352 80S344.844 64 336 64H288C282.531 64 277.438 66.797 274.5 71.406L176 226.195L77.5 71.406C74.562 66.797 69.469 64 64 64H16C7.156 64 0 71.156 0 80S7.156 96 16 96H55.219L157.035 256L55.219 416H16C7.156 416 0 423.156 0 432S7.156 448 16 448H64C69.469 448 74.562 445.203 77.5 440.594L176 285.805L274.5 440.594C277.438 445.203 282.531 448 288 448H336C344.844 448 352 440.844 352 432S344.844 416 336 416H296.781L194.965 256L296.781 96H336ZM496 160H464V16C464 7.156 456.844 0 448 0H416C407.156 0 400 7.156 400 16S407.156 32 416 32H432V160H400C391.156 160 384 167.156 384 176S391.156 192 400 192H496C504.844 192 512 184.844 512 176S504.844 160 496 160Z" />
        </Icon>
    </>
}