
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `hat-chef` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/hat-chef?s=regular hat-chef}
 * @preview ![hat-chef](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik00MDAuMDAxIDQ0OEM0MDAuMDAxIDQ1Ni44MzYgMzkyLjgzNyA0NjQgMzg0LjAwMSA0NjRIMTI4LjAwMUMxMTkuMTY1IDQ2NCAxMTIuMDAxIDQ1Ni44MzYgMTEyLjAwMSA0NDhWMzg0SDY0LjAwMVY0NDhDNjQuMDAxIDQ4My4xOTkgOTIuODAxIDUxMiAxMjguMDAxIDUxMkgzODQuMDAxQzQxOS4yIDUxMiA0NDguMDAxIDQ4My4xOTkgNDQ4LjAwMSA0NDhWMzg0SDQwMC4wMDFWNDQ4Wk00MTYuMDAxIDMyQzM5NS4xMjYgMzIuMTI1IDM3NC44NzYgMzkgMzU4LjI1MSA1MS43NUMzMzQuODc2IDIwLjUgMjk4IDAgMjU2LjAwMSAwQzIxNCAwIDE3Ny4xMjYgMjAuNSAxNTMuNzUxIDUxLjc1QzEzNi43MTcgMzguNjgyIDExNi4yMzMgMzEuOTk2IDk1LjYxOCAzMS45OTRDODEuMTM1IDMxLjk5NCA2Ni41ODggMzUuMjk1IDUzLjEyNiA0MkMyMC4zNzYgNTguMTI1IC0wLjEyNCA5MS41IDAuMDAxIDEyOEMwLjAwMSAxNjkuNzUgNjQuMDAxIDM1MiA2NC4wMDEgMzUySDQ0OC4wMDFDNDQ4LjAwMSAzNTIgNTEyLjAwMSAxNjkuNzUgNTEyLjAwMSAxMjhDNTEyLjAwMSA3NSA0NjkuMDAxIDMyIDQxNi4wMDEgMzJaTTQxNS45NTIgMzA0SDM3NC4wNzdMMzk5LjczNSAxNjIuODc1QzQwMS4zMjkgMTU0LjE1NiAzOTUuNTYzIDE0NS44NDQgMzg2Ljg2IDE0NC4yNUMzNzguMTcyIDE0Mi45MzggMzY5Ljg0NCAxNDguNDM4IDM2OC4yNjYgMTU3LjEyNUwzNDEuNTYxIDMwNEgyNzIuMDAxVjE2MEMyNzIuMDAxIDE1MS4xNTYgMjY0Ljg0NCAxNDQgMjU2LjAwMSAxNDRTMjQwLjAwMSAxNTEuMTU2IDI0MC4wMDEgMTYwVjMwNEgxNzAuNDRMMTQzLjczNSAxNTcuMTI1QzE0Mi4xNzIgMTQ4LjQzOCAxMzMuNzgyIDE0Mi45MDYgMTI1LjE0MSAxNDQuMjVDMTE2LjQzOCAxNDUuODQ0IDExMC42NzIgMTU0LjE1NiAxMTIuMjY2IDE2Mi44NzVMMTM3LjkyNCAzMDRIOTYuMDQ5QzcxLjQ0NCAyNDMuMjE3IDQ4LjQ3NyAxNDUuNDY1IDQ4LjAwMSAxMjcuODM2QzQ3LjkzOCAxMDkuNDggNTguMDI2IDkzLjA5IDc0LjUyNiA4NC45NjVDODEuMTQ5IDgxLjY2NiA4OC4yNDUgNzkuOTk0IDk1LjYxOCA3OS45OTRDMTA2LjE0NSA3OS45OTQgMTE2LjE0NSA4My4zOTYgMTI0LjUzMiA4OS44MzJMMTYzLjA4MyAxMTkuNDFMMTkyLjE4OCA4MC41QzIwNy42MzcgNTkuODQ2IDIzMC44OTcgNDggMjU2LjAwMSA0OEMyODEuMTA2IDQ4IDMwNC4zNjQgNTkuODQ2IDMxOS44MTUgODAuNUwzNDguOTEzIDExOS40MDJMMzg3LjQ2MiA4OS44MzhDMzk1Ljc3MiA4My40NjUgNDA1Ljc0MSA4MC4wNjIgNDE2LjAwMSA4MEM0NDIuNDY3IDgwIDQ2NC4wMDEgMTAxLjUzMyA0NjQuMDAzIDEyNy44OThDNDYzLjUyNCAxNDUuNDczIDQ0MC41NTkgMjQzLjIxOSA0MTUuOTUyIDMwNFoiLz48L3N2Zz4=|width=32|height=32)
 */
export default function HatChef(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M400.001 448C400.001 456.836 392.837 464 384.001 464H128.001C119.165 464 112.001 456.836 112.001 448V384H64.001V448C64.001 483.199 92.801 512 128.001 512H384.001C419.2 512 448.001 483.199 448.001 448V384H400.001V448ZM416.001 32C395.126 32.125 374.876 39 358.251 51.75C334.876 20.5 298 0 256.001 0C214 0 177.126 20.5 153.751 51.75C136.717 38.682 116.233 31.996 95.618 31.994C81.135 31.994 66.588 35.295 53.126 42C20.376 58.125 -0.124 91.5 0.001 128C0.001 169.75 64.001 352 64.001 352H448.001C448.001 352 512.001 169.75 512.001 128C512.001 75 469.001 32 416.001 32ZM415.952 304H374.077L399.735 162.875C401.329 154.156 395.563 145.844 386.86 144.25C378.172 142.938 369.844 148.438 368.266 157.125L341.561 304H272.001V160C272.001 151.156 264.844 144 256.001 144S240.001 151.156 240.001 160V304H170.44L143.735 157.125C142.172 148.438 133.782 142.906 125.141 144.25C116.438 145.844 110.672 154.156 112.266 162.875L137.924 304H96.049C71.444 243.217 48.477 145.465 48.001 127.836C47.938 109.48 58.026 93.09 74.526 84.965C81.149 81.666 88.245 79.994 95.618 79.994C106.145 79.994 116.145 83.396 124.532 89.832L163.083 119.41L192.188 80.5C207.637 59.846 230.897 48 256.001 48C281.106 48 304.364 59.846 319.815 80.5L348.913 119.402L387.462 89.838C395.772 83.465 405.741 80.062 416.001 80C442.467 80 464.001 101.533 464.003 127.898C463.524 145.473 440.559 243.219 415.952 304Z" />
        </Icon>
    </>
}