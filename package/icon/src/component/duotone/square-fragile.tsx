
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `square-fragile` icon from the `duotone` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/square-fragile?s=duotone square-fragile}
 * @preview ![square-fragile](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxkZWZzPjxzdHlsZT4uZmEtc2Vjb25kYXJ5e29wYWNpdHk6LjR9PC9zdHlsZT48L2RlZnM+PHBhdGggZD0iTTM4NCAzMkg2NEMyOC42NTQgMzIgMCA2MC42NTIgMCA5NlY0MTZDMCA0NTEuMzQ2IDI4LjY1NCA0ODAgNjQgNDgwSDM4NEM0MTkuMzQ2IDQ4MCA0NDggNDUxLjM0NiA0NDggNDE2Vjk2QzQ0OCA2MC42NTIgNDE5LjM0NiAzMiAzODQgMzJaTTMyMCAyMDhDMzIwIDI1NS41MzkgMjg1LjM2MyAyOTQuNzM0IDI0MCAzMDIuMzg3VjM4NEgyODhDMjk2LjgzNiAzODQgMzA0IDM5MS4xNjIgMzA0IDQwMEMzMDQgNDA4LjgzNiAyOTYuODM2IDQxNiAyODggNDE2SDE2MEMxNTEuMTY0IDQxNiAxNDQgNDA4LjgzNiAxNDQgNDAwQzE0NCAzOTEuMTYyIDE1MS4xNjQgMzg0IDE2MCAzODRIMjA4VjMwMi4zODdDMTYyLjYzNyAyOTQuNzM0IDEyOCAyNTUuNTM5IDEyOCAyMDhWMTEyQzEyOCAxMDMuMTYyIDEzNS4xNjQgOTYgMTQ0IDk2SDMwNEMzMTIuODM2IDk2IDMyMCAxMDMuMTYyIDMyMCAxMTJWMjA4WiIgY2xhc3M9ImZhLXNlY29uZGFyeSIvPjxwYXRoIGQ9Ik0zMjAgMjA4QzMyMCAyNTUuNTM5IDI4NS4zNjMgMjk0LjczNCAyNDAgMzAyLjM4N1YzODRIMjg4QzI5Ni44MzYgMzg0IDMwNCAzOTEuMTYyIDMwNCA0MDBDMzA0IDQwOC44MzYgMjk2LjgzNiA0MTYgMjg4IDQxNkgxNjBDMTUxLjE2NCA0MTYgMTQ0IDQwOC44MzYgMTQ0IDQwMEMxNDQgMzkxLjE2MiAxNTEuMTY0IDM4NCAxNjAgMzg0SDIwOFYzMDIuMzg3QzE2Mi42MzcgMjk0LjczNCAxMjggMjU1LjUzOSAxMjggMjA4VjExMkMxMjggMTAzLjE2MiAxMzUuMTY0IDk2IDE0NCA5NkgxNzZMMjA4IDE2MEwxNzYgMTkyTDI1NiAyNTZMMjI0IDE5MkwyNzIgMTYwTDI0MCA5NkgzMDRDMzEyLjgzNiA5NiAzMjAgMTAzLjE2MiAzMjAgMTEyVjIwOFoiIGNsYXNzPSJmYS1wcmltYXJ5Ii8+PC9zdmc+|width=32|height=32)
 */
export default function SquareFragile(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 448 512" {...props}>
            <path class={generic.secondary} d="M384 32H64C28.654 32 0 60.652 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.652 419.346 32 384 32ZM320 208C320 255.539 285.363 294.734 240 302.387V384H288C296.836 384 304 391.162 304 400C304 408.836 296.836 416 288 416H160C151.164 416 144 408.836 144 400C144 391.162 151.164 384 160 384H208V302.387C162.637 294.734 128 255.539 128 208V112C128 103.162 135.164 96 144 96H304C312.836 96 320 103.162 320 112V208Z" />
            <path d="M320 208C320 255.539 285.363 294.734 240 302.387V384H288C296.836 384 304 391.162 304 400C304 408.836 296.836 416 288 416H160C151.164 416 144 408.836 144 400C144 391.162 151.164 384 160 384H208V302.387C162.637 294.734 128 255.539 128 208V112C128 103.162 135.164 96 144 96H176L208 160L176 192L256 256L224 192L272 160L240 96H304C312.836 96 320 103.162 320 112V208Z" />
        </Icon>
    </>
}