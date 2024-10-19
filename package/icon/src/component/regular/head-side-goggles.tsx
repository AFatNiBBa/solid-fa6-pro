
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `head-side-goggles` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/head-side-goggles?s=regular head-side-goggles}
 * @preview ![head-side-goggles](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik01Ni40OTYgMjQwSDYuMzc1QzE2IDI3Ny4xMjUgMzYuMjQ4IDMxMCA2My45OTYgMzM0Ljg3NVY0ODguMDAyQzYzLjk5NiA1MDEuMjU2IDc0Ljc0IDUxMiA4Ny45OTQgNTEySDg3Ljk5NkMxMDEuMjUgNTEyIDExMS45OTQgNTAxLjI1NiAxMTEuOTk0IDQ4OC4wMDJWMzEzLjM3NUw5NS45OTQgMjk5LjEyNUM3Ny44NzEgMjgyLjg3NSA2NC40OTYgMjYyLjM3NSA1Ni40OTYgMjQwWk01MDcuOTczIDI3MkgzOTkuOTc5VjM4NEMzOTkuOTc5IDM5Mi44MzYgMzkyLjgxNCA0MDAgMzgzLjk3OSA0MDBIMzAzLjk4MlY0ODhDMzAzLjk4MiA1MDEuMjU2IDMxNC43MjkgNTEyIDMyNy45ODIgNTEyUzM1MS45OCA1MDEuMjU2IDM1MS45OCA0ODhWNDQ4SDM4My45NzlDNDE5LjMyMiA0NDggNDQ3Ljk3NSA0MTkuMzQ4IDQ0Ny45NzUgMzg0LjAwNFYzMjBINDc5Ljk3M0M1MDMuMDk4IDMyMCA1MTguNTk2IDI5Ni4xMjUgNTA5LjIyMSAyNzVDNTA4LjcyMyAyNzQuMTI1IDUwOC4zNDggMjcyLjg3NSA1MDcuOTczIDI3MlpNNDc5Ljk3MyA0OEgzOTguMzU0QzM2MS44NTUgMTcuNzUgMzE1LjQ4MiAwIDI2Ni4xMDkgMEgxOTkuOTg4QzEzNC44NjcgMCA3NS4xMjEgMzEuMjUgMzguMTIzIDgwSDMxLjk5OEMxNC4zNzUgODAgMCA5NC4zNzUgMCAxMTJWMTc2QzAgMTkzLjYyNSAxNC4zNzUgMjA4IDMxLjk5OCAyMDhIMjE1Ljk4OEMyMTYuMjM4IDIwOCAyMTYuMzYzIDIwNy43NSAyMTYuNjEzIDIwNy43NUMyMzQuMjM2IDIyNy4zNzUgMjU5LjQ4NiAyNDAgMjg3Ljk4NCAyNDBINDc5Ljk3M0M0OTcuNTk4IDI0MCA1MTEuOTcxIDIyNS42MjUgNTExLjk3MSAyMDhWODBDNTExLjk3MSA2Mi4zNzUgNDk3LjU5OCA0OCA0NzkuOTczIDQ4Wk0xOTMuNjEzIDE2MEg0Ny45OThWMTI4SDE5My42MTNDMTkyLjc0IDEzMy4yNSAxOTEuOTkgMTM4LjUgMTkxLjk5IDE0NFMxOTIuNzQgMTU0Ljc1IDE5My42MTMgMTYwWk0yMTUuOTg4IDgwSDEwNC4xMTlDMTMwLjg2NyA1OS42MjUgMTY0LjI0IDQ4IDE5OC45ODggNDhIMjY2LjEwOUMyNzAuNzM0IDQ4IDI3NS4zNTkgNDguMzc1IDI3OS45ODQgNDguNzVDMjU0LjczNiA1MC44NzUgMjMyLjQ4NiA2Mi41IDIxNi42MTMgODAuMjVDMjE2LjM2MyA4MC4yNSAyMTYuMjM4IDgwIDIxNS45ODggODBaTTM4My45NzkgMTkySDI4Ny45ODRDMjYxLjQ4NiAxOTIgMjM5Ljk4NiAxNzAuNSAyMzkuOTg2IDE0NFMyNjEuNDg2IDk2IDI4Ny45ODQgOTZIMzgzLjk3OVYxOTJaTTQ2My45NzUgMTkySDQzMS45NzdWOTZINDYzLjk3NVYxOTJaIi8+PC9zdmc+|width=32|height=32)
 */
export default function HeadSideGoggles(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M56.496 240H6.375C16 277.125 36.248 310 63.996 334.875V488.002C63.996 501.256 74.74 512 87.994 512H87.996C101.25 512 111.994 501.256 111.994 488.002V313.375L95.994 299.125C77.871 282.875 64.496 262.375 56.496 240ZM507.973 272H399.979V384C399.979 392.836 392.814 400 383.979 400H303.982V488C303.982 501.256 314.729 512 327.982 512S351.98 501.256 351.98 488V448H383.979C419.322 448 447.975 419.348 447.975 384.004V320H479.973C503.098 320 518.596 296.125 509.221 275C508.723 274.125 508.348 272.875 507.973 272ZM479.973 48H398.354C361.855 17.75 315.482 0 266.109 0H199.988C134.867 0 75.121 31.25 38.123 80H31.998C14.375 80 0 94.375 0 112V176C0 193.625 14.375 208 31.998 208H215.988C216.238 208 216.363 207.75 216.613 207.75C234.236 227.375 259.486 240 287.984 240H479.973C497.598 240 511.971 225.625 511.971 208V80C511.971 62.375 497.598 48 479.973 48ZM193.613 160H47.998V128H193.613C192.74 133.25 191.99 138.5 191.99 144S192.74 154.75 193.613 160ZM215.988 80H104.119C130.867 59.625 164.24 48 198.988 48H266.109C270.734 48 275.359 48.375 279.984 48.75C254.736 50.875 232.486 62.5 216.613 80.25C216.363 80.25 216.238 80 215.988 80ZM383.979 192H287.984C261.486 192 239.986 170.5 239.986 144S261.486 96 287.984 96H383.979V192ZM463.975 192H431.977V96H463.975V192Z" />
        </Icon>
    </>
}