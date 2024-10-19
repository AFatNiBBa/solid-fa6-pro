
import { Icon, generic } from "../../index";
import { ComponentProps } from "solid-js";

/**
 * A component that renders the `house-signal` icon from the `light` section of Font Awesome 6 Pro
 * @see {@link https://fontawesome.com/icons/house-signal?s=light house-signal}
 * @preview ![house-signal](data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNi4wLjAtYWxwaGEyIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0xNiA0MTYuMDAxQzcuMTU2IDQxNi4wMDEgMCA0MjMuMTU4IDAgNDMyLjAwMVM3LjE1NiA0NDguMDAxIDE2IDQ0OC4wMDFDNDIuNDY5IDQ0OC4wMDEgNjQgNDY5LjUzMiA2NCA0OTZDNjQgNTA0Ljg0NCA3MS4xNTYgNTEyIDgwIDUxMlM5NiA1MDQuODQ0IDk2IDQ5NkM5NiA0NTEuODc2IDYwLjEwOSA0MTYuMDAxIDE2IDQxNi4wMDFaTTE2IDIyNC4wMDRDNy4xNTYgMjI0LjAwNCAwIDIzMS4xNiAwIDI0MC4wMDRTNy4xNTYgMjU2LjAwNCAxNiAyNTYuMDA0QzE0OC4zNDQgMjU2LjAwNCAyNTYgMzYzLjY1OCAyNTYgNDk2QzI1NiA1MDQuODQ0IDI2My4xNTYgNTEyIDI3MiA1MTJTMjg4IDUwNC44NDQgMjg4IDQ5NkMyODggMzQ2LjAzNCAxNjUuOTg0IDIyNC4wMDQgMTYgMjI0LjAwNFpNMTYgMzIwLjAwM0M3LjE1NiAzMjAuMDAzIDAgMzI3LjE1OSAwIDMzNi4wMDNTNy4xNTYgMzUyLjAwMiAxNiAzNTIuMDAyQzk1LjQwNiAzNTIuMDAyIDE2MCA0MTYuNTk1IDE2MCA0OTZDMTYwIDUwNC44NDQgMTY3LjE1NiA1MTIgMTc2IDUxMlMxOTIgNTA0Ljg0NCAxOTIgNDk2QzE5MiAzOTguOTcgMTEzLjA0NyAzMjAuMDAzIDE2IDMyMC4wMDNaTTY0MCAyMTEuNzM2QzY0MCAyMDcuNDIxIDYzOC4yNyAyMDMuMTE4IDYzNC44NSAxOTkuOTY1TDU3Ni4zMTYgMTQ4LjcxVjQ4LjY5M0M1NzYuMzE2IDQ1LjkyIDU3NC4xMjQgMzEuOTQ4IDU2MC4zMDggMzEuOTQ4QzU1MS40MjggMzEuOTQ4IDU0NC4yOTkgMzkuMDczIDU0NC4yOTkgNDcuOTVWMTIwLjcwOUw0MTAuNzI2IDMuOTQ0QzQwNy43MTggMS4zMTUgNDAzLjk2OSAwIDQwMC4yMjEgMEMzOTYuNDcyIDAgMzkyLjcyMyAxLjMxNSAzODkuNzE1IDMuOTQ1TDIyNC4xMjMgMTQ4LjcxTDE2NS41OTIgMTk5Ljk2NUMxNjEuOTkzIDIwMy4wNSAxNTkuOTE2IDIwNy40ODUgMTU5LjkxNiAyMTIuMTYxQzE1OS45MTYgMjE2LjUzNSAxNjMuMzkyIDIyOC4xMjIgMTc1Ljg1NiAyMjguMTIyQzE3OS43ODIgMjI4LjEyMiAxODMuNjIyIDIyNi43MjIgMTg2LjYwNCAyMjQuMDk0TDIyNC4xMjMgMTkxLjIxNkwyMjQuMDMxIDIzOS45NzZDMjI0LjAzMSAyMzkuOTg3IDIyNC4wMzEgMjM5Ljk5NyAyMjQuMDMxIDI0MC4wMDhDMjI0LjAzMSAyNDguODQgMjMxLjE5MiAyNTYuMDA0IDI0MC4wMjggMjU2LjAwNEMyNDguODU0IDI1Ni4wMDQgMjU2LjAxMiAyNDguODU3IDI1Ni4wMjYgMjQwLjAzMkwyNTYuMTQxIDE2Ny45NjJDMjU2LjAxNiAxNjYuNTg3IDI1NS43NjYgMTY1LjIxMiAyNTUuMzkxIDE2My45NjJMNDAwLjIyMSAzNy4xOThMNTQ0LjI5OSAxNjMuMjEyVjM2Ny45ODRDNTQ0LjI5OSAzNzYuODIyIDUzNy4xMzUgMzgzLjk4NiA1MjguMjk3IDM4My45ODZIMzM1Ljk5OEMzMjcuMTYzIDM4My45ODYgMzIwIDM5MS4xNDggMzIwIDM5OS45ODRWMzk5Ljk5MkMzMjAgNDA4LjgyOCAzMjcuMTYzIDQxNS45OSAzMzUuOTk4IDQxNS45OUg1MjguMjkxQzU1NC44MTUgNDE1Ljk5IDU3Ni4zMTYgMzk0LjQ4OSA1NzYuMzE2IDM2Ny45NjVWMTkxLjIxNkw2MTMuODM4IDIyNC4wOTRDNjE2Ljc5NCAyMjYuNTQ3IDYyMC4zOTcgMjI3Ljc1NyA2MjMuOTkyIDIyNy43NTdDNjI4Ljk0NiAyMjcuNzU3IDY0MCAyMjMuODggNjQwIDIxMS43MzZaTTQ0Mi44NjkgMjg3Ljk3NkM0NTQuNjI1IDI4Ny45NzYgNDY0LjI1NiAyNzguMzQ5IDQ2NC4yNTYgMjY2LjU5OVYxODEuMzM5QzQ2NC4yNTYgMTY5LjU4OSA0NTQuNzUgMTU5Ljk2MiA0NDIuODY5IDE1OS45NjJIMzU3LjU3MkMzNDUuODE0IDE1OS45NjIgMzM2LjE4NiAxNjkuNDY0IDMzNi4xODYgMTgxLjMzOVYyNjYuNTk5QzMzNi4xODYgMjc4LjQ3NCAzNDUuODE0IDI4Ny45NzYgMzU3LjU3MiAyODcuOTc2SDQ0Mi44NjlaTTM2OC4yMDMgMTkxLjk2Nkg0MzIuMjM4VjI1NS45NzJIMzY4LjIwM1YxOTEuOTY2WiAiPjwvcGF0aD48L3N2Zz4=|width=32|height=32)
 */
export default function HouseSignal(props: ComponentProps<typeof Icon>) {
    return <>
        <Icon viewBox="0 0 640 512" {...props}>
            <path d="M16 416.001C7.156 416.001 0 423.158 0 432.001S7.156 448.001 16 448.001C42.469 448.001 64 469.532 64 496C64 504.844 71.156 512 80 512S96 504.844 96 496C96 451.876 60.109 416.001 16 416.001ZM16 224.004C7.156 224.004 0 231.16 0 240.004S7.156 256.004 16 256.004C148.344 256.004 256 363.658 256 496C256 504.844 263.156 512 272 512S288 504.844 288 496C288 346.034 165.984 224.004 16 224.004ZM16 320.003C7.156 320.003 0 327.159 0 336.003S7.156 352.002 16 352.002C95.406 352.002 160 416.595 160 496C160 504.844 167.156 512 176 512S192 504.844 192 496C192 398.97 113.047 320.003 16 320.003ZM640 211.736C640 207.421 638.27 203.118 634.85 199.965L576.316 148.71V48.693C576.316 45.92 574.124 31.948 560.308 31.948C551.428 31.948 544.299 39.073 544.299 47.95V120.709L410.726 3.944C407.718 1.315 403.969 0 400.221 0C396.472 0 392.723 1.315 389.715 3.945L224.123 148.71L165.592 199.965C161.993 203.05 159.916 207.485 159.916 212.161C159.916 216.535 163.392 228.122 175.856 228.122C179.782 228.122 183.622 226.722 186.604 224.094L224.123 191.216L224.031 239.976C224.031 239.987 224.031 239.997 224.031 240.008C224.031 248.84 231.192 256.004 240.028 256.004C248.854 256.004 256.012 248.857 256.026 240.032L256.141 167.962C256.016 166.587 255.766 165.212 255.391 163.962L400.221 37.198L544.299 163.212V367.984C544.299 376.822 537.135 383.986 528.297 383.986H335.998C327.163 383.986 320 391.148 320 399.984V399.992C320 408.828 327.163 415.99 335.998 415.99H528.291C554.815 415.99 576.316 394.489 576.316 367.965V191.216L613.838 224.094C616.794 226.547 620.397 227.757 623.992 227.757C628.946 227.757 640 223.88 640 211.736ZM442.869 287.976C454.625 287.976 464.256 278.349 464.256 266.599V181.339C464.256 169.589 454.75 159.962 442.869 159.962H357.572C345.814 159.962 336.186 169.464 336.186 181.339V266.599C336.186 278.474 345.814 287.976 357.572 287.976H442.869ZM368.203 191.966H432.238V255.972H368.203V191.966Z " />
        </Icon>
    </>
}