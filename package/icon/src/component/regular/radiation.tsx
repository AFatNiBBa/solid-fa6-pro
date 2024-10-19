
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `radiation` icon from the `regular` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/radiation?s=regular radiation}
 * @preview ![radiation](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0yNTYuMjUgMzA0QzI4Mi43NSAzMDQgMzA0LjI1IDI4Mi41IDMwNC4yNSAyNTZTMjgyLjc1IDIwOCAyNTYuMjUgMjA4UzIwOC4yNSAyMjkuNSAyMDguMjUgMjU2UzIyOS43NSAzMDQgMjU2LjI1IDMwNFpNMjEzLjg0OSAxODhMMTQyLjkxNCA3NC43MTVDMTM2Ljc1NCA2NC44NzkgMTI2LjEwNyA1OS40ODQgMTE1LjQxIDU5LjQ4NEMxMDguMzc1IDU5LjQ4NCAxMDEuMzE4IDYxLjgxNiA5NS41IDY2Ljc1QzUwLjU2MiAxMDQuODQ4IDE5LjMxIDE1OC41NjggMTAuMzM0IDIxOS41MzlDNy41MTUgMjM4LjY3MiAyMi45MiAyNTUuODAxIDQyLjI2IDI1NS44MDFIMTc2LjA1MUMxNzYuMDUxIDIyNy4xOTkgMTkxLjI1IDIwMi4zMDEgMjEzLjg0OSAxODhaTTEzNy40MSAyMDcuODAxSDYxLjUxNEM3MC4wMTIgMTczLjUxMiA4Ny41ODYgMTQyLjAxNCAxMTIuNDQ5IDExNi41MDhMMTUyLjU5IDE4MC42MTNDMTQ2LjQyNiAxODkuMDM5IDE0MS4zMyAxOTguMTY2IDEzNy40MSAyMDcuODAxWk00MTcgNjYuNzVDNDExLjE4MiA2MS44MTYgNDA0LjEyMyA1OS40ODQgMzk3LjA5IDU5LjQ4NEMzODYuMzkgNTkuNDg0IDM3NS43NDYgNjQuODc3IDM2OS41ODYgNzQuNzE1TDI5OC42NSAxODhDMzIxLjI1IDIwMi4zMDEgMzM2LjQ0OSAyMjcuMTk5IDMzNi40NDkgMjU1LjgwMUg0NzAuMjRDNDg5LjU4IDI1NS44MDEgNTA0Ljk4NCAyMzguNjcyIDUwMi4xNjYgMjE5LjUzOUM0OTMuMTg5IDE1OC41NjggNDYxLjkzNyAxMDQuODQ4IDQxNyA2Ni43NVpNMzc1LjA5IDIwNy44MDFDMzcxLjE3IDE5OC4xNjYgMzY2LjA3NCAxODkuMDM5IDM1OS45MSAxODAuNjEzTDQwMC4wNTEgMTE2LjUwOEM0MjQuOTEgMTQyLjAxIDQ0Mi40ODYgMTczLjUxNCA0NTAuOTg2IDIwNy44MDFIMzc1LjA5Wk0yOTguNjUgMzIzLjVDMjg2LjM0OSAzMzEuMTk5IDI3MS44NDkgMzM1LjkgMjU2LjI1IDMzNS45UzIyNi4xNSAzMzEuMTk5IDIxMy44NDkgMzIzLjVMMTQyLjkxNCA0MzYuODczQzEzMi43NzEgNDUzLjA4NiAxMzguNzU0IDQ3NS4wNzIgMTU2LjIzNiA0ODIuODI0QzE4Ni44MjYgNDk2LjM4OSAyMjAuNjU4IDUwNCAyNTYuMjUgNTA0UzMyNS42NzQgNDk2LjM4OSAzNTYuMjY0IDQ4Mi44MjRDMzczLjc0NiA0NzUuMDcyIDM3OS43MjggNDUzLjA4NiAzNjkuNTg2IDQzNi44NzNMMjk4LjY1IDMyMy41Wk0yNTYuMjUgNDU2QzIzNC44NDkgNDU2IDIxMy45MzUgNDUyLjYzMSAxOTMuODQ2IDQ0NS45NjdMMjMzLjkzNSAzODEuODkzQzI0MS4yODcgMzgzLjIyMyAyNDguNzU0IDM4My45IDI1Ni4yNSAzODMuOVMyNzEuMjEzIDM4My4yMjMgMjc4LjU2NCAzODEuODkzTDMxOC42NTQgNDQ1Ljk2N0MyOTguNTY0IDQ1Mi42MzEgMjc3LjY1IDQ1NiAyNTYuMjUgNDU2WiIvPjwvc3ZnPg==|width=32|height=32)
 */
export default function Radiation(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon {...props}>
            <path d="M256.25 304C282.75 304 304.25 282.5 304.25 256S282.75 208 256.25 208S208.25 229.5 208.25 256S229.75 304 256.25 304ZM213.849 188L142.914 74.715C136.754 64.879 126.107 59.484 115.41 59.484C108.375 59.484 101.318 61.816 95.5 66.75C50.562 104.848 19.31 158.568 10.334 219.539C7.515 238.672 22.92 255.801 42.26 255.801H176.051C176.051 227.199 191.25 202.301 213.849 188ZM137.41 207.801H61.514C70.012 173.512 87.586 142.014 112.449 116.508L152.59 180.613C146.426 189.039 141.33 198.166 137.41 207.801ZM417 66.75C411.182 61.816 404.123 59.484 397.09 59.484C386.39 59.484 375.746 64.877 369.586 74.715L298.65 188C321.25 202.301 336.449 227.199 336.449 255.801H470.24C489.58 255.801 504.984 238.672 502.166 219.539C493.189 158.568 461.937 104.848 417 66.75ZM375.09 207.801C371.17 198.166 366.074 189.039 359.91 180.613L400.051 116.508C424.91 142.01 442.486 173.514 450.986 207.801H375.09ZM298.65 323.5C286.349 331.199 271.849 335.9 256.25 335.9S226.15 331.199 213.849 323.5L142.914 436.873C132.771 453.086 138.754 475.072 156.236 482.824C186.826 496.389 220.658 504 256.25 504S325.674 496.389 356.264 482.824C373.746 475.072 379.728 453.086 369.586 436.873L298.65 323.5ZM256.25 456C234.849 456 213.935 452.631 193.846 445.967L233.935 381.893C241.287 383.223 248.754 383.9 256.25 383.9S271.213 383.223 278.564 381.893L318.654 445.967C298.564 452.631 277.65 456 256.25 456Z" />
        </Icon>
    </>
}